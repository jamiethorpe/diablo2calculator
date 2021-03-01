import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.MIX_APP_ENV !== 'production'

export const store = new Vuex.Store({
    state: {
        
    },
    getters: {

    },
    modules: {

    },
    strict: debug
})