const moduleA={
	namespaced: true,
	state:{
		index:'1',
		a:3
	},
	mutations:{
		goToDirect(state,index){
			uni.navigateTo({
				url:'/pages/direct/direct',
				animationType:"fade-in",
				success: (res) => {
					res.eventChannel.emit('pushIndex',{Index:index})
				}
			})
		}
	},
	actions:{
		
	},
	getters:{
		
	}
}
export default moduleA