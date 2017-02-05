/* eslint-disable */
export function updateUser(state, payload = { id: '', name: '' }) {
  state.authedUser = payload;
}

export function updateViewPicsById(state, payload) {
  state.viewPicsById = payload;
}