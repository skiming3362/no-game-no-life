import Vuex, { ActionTree, MutationTree, StoreOptions } from 'vuex'

interface State {
  main: number
}

const state: State = {
  main: 0
}

const mutations: MutationTree<State> = {
  DECREMENT_MAIN_COUNTER (state: State) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state: State, n: number) {
    state.main += n
  }
}

const actions: ActionTree<State, any> = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

const Counter: StoreOptions<{}> = {
  state,
  mutations,
  actions,
}

export default Counter
