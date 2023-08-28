<template>
	<view>
		<scroll-view :scroll-x="true" style="white-space: nowrap; width:120rpx">
			<view style="display: flex;">
				<view class="div" v-for="(item,index) in 12" :key="index">
					{{index}}
				</view>
			</view>
		</scroll-view>
		<button><navigator url="../nvues/nvues" open-type="navigate">传送</navigator></button>
		<input type="text" value="" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.div{
	width: 100rpx;
	height: 100rpx;
	background-color: aqua;
	margin-right: 10rpx;
}
</style>
