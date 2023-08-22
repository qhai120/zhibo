<template>
	<view>
		<scroll-view scroll-y  style="height: 300rpx;" >
			<view v-for="(item,index) in 4" :key="index" class="row" >
					<view :class="['boder_liwu_left','row']" style="align-items: center;">
						<image src="../../static/phone.png" class="text_yuan" mode=""></image>
						<view class="direct_Head_Left_Right" style="width: 150rpx;">
							<text style="display: block;color: white;">昵称</text>
							<text style="display: block;color: white;">送皇冠</text>
						</view>
						<view class="text_yuan" style="font-size: 80rpx;line-height: 80rpx;margin-right: 10rpx;">
							<svg class="icon bottom_Icon" aria-hidden="true">
								<use xlink:href="#icon-liwu1"></use>
							</svg>
						</view>
					</view>
					<view class="boder_liwu_right">
						x1
					</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"live",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.row{
	flex-direction: row;
}
</style>