<template>
<div class="date-container">
  <small class="date">{{ parsedDate }}</small>
  <message-item
    v-for="(message, i) of date.messages"
    :message="message"
    :key="i">
  </message-item>
</div>
</template>

<script>
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
  },
}
</script>

<style scoped>
.date-container {
  display: flex;
  flex-direction: column;
}

.date-container + .date-container {
  margin-top: 1em;
}

.date {
  align-self: center;
  background: #e6e5ff;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 0.25em 0.5em;
}

.-dark .date {
  background: #2f2f40;
}
</style>
