const direct={
	namespaced: true,
	state:{
		index:'',
		video:'',
		num:0
	},
	mutations:{
		changeIndex(state,index){
			state.index=index;
			console.log(state.index)
		},
		addNum(state){
			let num=setInterval(()=>{
				state.num++;
				if(state.num){
					let num=setTimeout(()=>{
						state.num--
					},1000)
				}
			},2000)
			
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