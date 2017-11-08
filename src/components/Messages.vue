<template>
<div
  class="container"
  ref="view"
  :style="containerStyle">
  <message-item
    v-for="(message, i) of messages" :key="i"
    :message="message">
  </message-item>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageItem from './MessageItem'

export default {
  components: {
    MessageItem,
  },

  data () {
    return {
      styles: {
        dark: {
          background: 'transparent',
        },
        normal: {
          background: '#ececfc',
        },
      },
    }
  },

  computed: {
    containerStyle () {
      return this.styles[this.appMode]
    },
    ...mapGetters([
      'appMode',
      'messages',
    ]),
  },

  mounted () {
    this.$root.$on('scroll-to-bottom', this.scrollToBottom)
    this.scrollToBottom()
  },

  methods: {
    scrollToBottom () {
      const view = this.$refs.view
      setTimeout(() => {
        view.scrollTop = view.scrollHeight - view.clientHeight
      }, 10)
    },
  }
}
</script>

<style scoped>
.container {
  flex: 1 1 100px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1em;
}
</style>
