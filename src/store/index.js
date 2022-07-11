import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu.js'
import config from './modules/config.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules: {
        menu,
        config
    }
})