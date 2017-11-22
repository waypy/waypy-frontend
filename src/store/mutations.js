export default {
  SWITCH_APP_MODE (state) {
    state.appMode = state.appMode === 'normal' ? 'dark' : 'normal'
  },
  SWITCH_HELP (state, value) {
    state.helpShown = value
  },
  SET_LOCATION (state, location) {
    state.location = location
  },
  ADD_MESSAGE (state, message) {
    const date = message.timestamp.getDate()
    const month = message.timestamp.getMonth() + 1
    const year = message.timestamp.getFullYear()
    const fullDate = `${date} ${month} ${year}`

    let today = state.messages
      .filter((date) => date.date === fullDate)[0]

    if (today) {
      today.messages.push(message)
    } else {
      state.messages
        .push({
          date: fullDate,
          messages: [ message ]
        })
    }
  },
}
