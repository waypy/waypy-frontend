<template>
<div
  class="container"
  ref="view">
  <date-messages
    v-for="(date, i) of messages"
    :date="date"
    :key="i">
  </date-messages>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import DateMessages from './DateMessages'

export default {
  components: {
    DateMessages,
  },

  computed: {
    ...mapGetters([
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
  background: #ececfc;
  flex: 1 1 100px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1em;
}

.-dark .container {
  background: transparent;
}
</style>
