import Vue from 'vue'
import Vuex, { StoreOptions, Store } from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const options: StoreOptions<{}> = {
  modules,
  strict: process.env.NODE_ENV !== 'production'
}

const store: Store<{}> = new Vuex.Store(options)

export default store
