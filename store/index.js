import vue from 'vue'
import vuex from'vuex'

vue.use(vuex)

import moduleA from './modules/home.js'
import direct from './modules/direct.js'
const store = new vuex.Store({
	namespaced: true,
	state:{
		
	},
	modules:{
		moduleA,direct
	}
})

export default store