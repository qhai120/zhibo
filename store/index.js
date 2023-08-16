import vue from 'vue'
import vuex from'vuex'

vue.use(vuex)

import moduleA from './modules/home.js'
const store = new vuex.Store({
	namespaced: true,
	state:{
		username:"foo",
		age:18
	},
	mutation:{
		
	},
	action:{
		
	},
	getter:{
		
	},
	modules:{
		moduleA
	}
})

export default store