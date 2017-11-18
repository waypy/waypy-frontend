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

    if (state.messages.length) {
      state.messages
        .map((date) => {
          if (date.date === fullDate) {
            state.messages
              .filter((date) => date.date === fullDate)[0].messages
              .push(message)
          } else {
            pushDateMessage(state, message, fullDate)
          }
        })
    } else {
      pushDateMessage(state, message, fullDate)
    }
  },
}

function pushDateMessage (state, message, fullDate) {
  state.messages
    .push({
      date: fullDate,
      messages: [ message ]
    })
}
