const direct={
	namespaced: true,
	state:{
		index:'',
		video:''
	},
	mutations:{
		changeIndex(state,index){
			state.index=index;
			console.log(state.index)
		}
	},
	actions:{
		 getVideo(context,Url){
			 uni.request({
				url:Url,
				method:"GET",
				success: (res) => {
					context.state.video=res.data.msg[0].video
				},
				fail: (res) => {
					console.log(res.data)
				}
			})
		}
	},
	getters:{
		
	}
}
export default direct