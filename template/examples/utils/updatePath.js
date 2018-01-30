export default function updatePath ({ store: { commit }, route: { path } }) {
  commit('updatePath', { path })
}
