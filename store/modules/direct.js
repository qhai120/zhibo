const direct = {
	namespaced: true,
	state: {
		index: '',
		video: '',
		jinbi:1000,
		liwu: []
	},
	mutations: {
		changeIndex(state, index) {
			state.index = index;
		},
		changeLiwu(state,good){
			state.liwu.push(good)
		},
		decreaseJinbi(state,num){
			state.jinbi=num
		},
		increaseJinbi(state,num){
			state.jinbi=state.jinbi+num
		},
		addLiwu(state) {
			const num = state.liwu.length
			if (num != 0) {
				let num = setTimeout(() => {
					state.liwu.splice(0, 1)
				}, 1000)
			} else {
				return
			}
		}
	},
	actions: {
		getVideo(context, Url) {
			uni.request({
				url: Url,
				method: "GET",
				success: (res) => {
					context.state.video = res.data.msg[0].video
				}
			})
		}
	},
	getters: {

	}
}
export default direct