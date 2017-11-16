<template>
<div>
  <small class="date" :class="[ `-${appMode}` ]">{{ parsedDate }}</small>
  <message-item
    v-for="(message, i) of date.messages"
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

  props: {
    date: Object
  },

  data () {
    return {
      monthNames: [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
    }
  },

  computed: {
    parsedDate () {
      let date = this.date.date.split(' ')
      return `${date[0]} ${this.monthNames[date[1] - 1]} ${date[2]}`
    },
    ...mapGetters([
      'appMode',
    ]),
  },
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

.date {
  align-self: center;
  background: #e6e5ff;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 0.25em 0.5em;
}

.-dark {
  background: #2f2f40;
}
</style>
