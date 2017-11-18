<template>
<footer ref="footer">
  <textarea
    type="text"
    placeholder="Ketik pesan"
    rows="1"
    v-model="message.message"
    ref="input"
    @keyup="autoresize"
    @keydown.enter.prevent="send">
  </textarea>
  <a @click="send">
    <send-icon></send-icon>
  </a>
</footer>
</template>

<script>
import { mapActions } from 'vuex'
import SendIcon from './SendIcon'

export default {
  components: {
    SendIcon,
  },

  data () {
    return {
      containerHeight: null,
      inputEl: null,
      initInputHeight: null,
      message: {
        user: true,
        message: '',
      },
    }
  },

  watch: {
    containerHeight (val, oldVal) {
      if (val !== oldVal) {
        this.$emit('height-change', val + 2 + 'px')
      }
    },
  },

  mounted () {
    this.inputEl = this.$refs.input
    this.initInputHeight = this.inputEl.clientHeight
    this.containerHeight = this.$refs.footer.clientHeight
  },

  methods: {
    autoresize (e) {
      if (e.keyCode !== 13) {
        this.inputEl.style.height = this.inputEl.scrollHeight + 'px'
        this.containerHeight = this.$refs.footer.clientHeight
        this.$root.$emit('scroll-to-bottom')
      }
    },
    send () {
      if (this.message.message !== '') {
        let timestamp = new Date()
        this.addMessage(
          Object.assign(
            this.clone(this.message),
            { timestamp }
          )
        )
        this.message.message = ''
        this.$root.$emit('scroll-to-bottom')
        this.resetHeight()
      }
    },
    resetHeight () {
      this.inputEl.style.height = this.initInputHeight + 'px'
      this.containerHeight = this.$refs.footer.clientHeight
    },
    clone: (obj) => JSON.parse(JSON.stringify(obj)),
    ...mapActions([
      'addMessage',
    ]),
  },
}
</script>

<style scoped>
footer {
  align-items: center;
  bottom: 0;
  box-shadow: 0 -0.5em 1em 0 rgba(0, 0, 0, 0.05);
  display: flex;
  left: 50%;
  max-width: 640px;
  padding: 1em;
  position: fixed;
  transform: translateX(-50%);
  width: 100%;
}

@media screen and (min-width: 641px) {
  footer {
    border-radius: 6px 6px 0 0;
  }
}

textarea {
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0.25em 1em 0 rgba(0, 0, 0, 0.05);
  flex: 1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;
  max-height: 80px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.5em;
  resize: none;
}

textarea:focus {
  outline: 0;
}

a {
  flex: 0 0 1em;
  margin-left: 1em;
}

svg {
  vertical-align: bottom;
}
</style>
