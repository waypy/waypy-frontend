export default {
  switchAppMode: make('SWITCH_APP_MODE'),
  setLocation: make('SET_LOCATION'),
  addMessage: make('ADD_MESSAGE'),
}

function make (type) {
  return ({ commit }, ...args) => commit(type, ...args)
}
