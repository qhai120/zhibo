const direct={
	namespaced: true,
	state:{
		index:''
	},
	mutations:{
		changeIndex(state,index){
			state.index=index;
			console.log(state.index)
		}
	},
	actions:{
		
	},
	getters:{
		
	}
}
export default direct