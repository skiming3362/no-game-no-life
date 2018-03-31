/**
 * The file enables `@/store/index.ts` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

import Vuex, { StoreOptions, ModuleOptions, ModuleTree } from 'vuex'

declare class require {
  static context: any
}

const files = require.context('.', false, /\.ts$/)
const modules: ModuleTree<{}>  = {}

files.keys().forEach(key => {
  if (key === './index.ts') return
  modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
})

console.log(modules);


export default modules
