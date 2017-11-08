export default {
  SWITCH_APP_MODE (state) {
    let theme = document.querySelector('[name=theme-color]')
    state.appMode = state.appMode === 'normal' ? 'dark' : 'normal'
    if (state.appMode === 'normal') {
      theme.setAttribute('content', '#ececfc')
    } else {
      theme.setAttribute('content', '#000022')
    }
  },
  ADD_MESSAGE (state, message) {
    state.messages.push(message)
  },
}
