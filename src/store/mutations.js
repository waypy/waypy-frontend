export default {
  SWITCH_APP_MODE (state) {
    state.appMode = state.appMode === 'normal' ? 'dark' : 'normal'
  },
  ADD_MESSAGE (state, message) {
    state.messages.push(message)
  },
}
