import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './auth.module';
import layout from './layout';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        layout,
    },
});
