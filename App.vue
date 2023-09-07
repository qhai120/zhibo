<script>
	export default {
		onLaunch: function() {
			// 监听底部导航凸起事件
			uni.onTabBarMidButtonTap(()=>{
				uni.navigateTo({
					url:"/pages/create-live/create-live"
				})
			})
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("common/common.css");
	/*每个页面公共css */
</style>
