/* eslint-disable */
export function getAuthedUser({ commit }) {
  fetch('/api/users')
    .then(res => res.json())
    .then(user => {
      if (user.name) {
        commit('updateUser', {
          id: user.id,
          name: user.name,
        });
      }
    });
}