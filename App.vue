<script>
	export default {
		onLaunch: function() {
			uni.onTabBarMidButtonTap(()=>{
				uni.showToast({
					title:"点击了中间按纽",
					mask:true,
					duration:2000
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
	@import url(common/common.css);
	/*每个页面公共css */
</style>
