export default {
  switchAppMode: make('SWITCH_APP_MODE'),
  addMessage: make('ADD_MESSAGE'),
}

function make (type) {
  return ({ commit }, ...args) => commit(type, ...args)
}
