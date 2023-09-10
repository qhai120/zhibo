<template>
	<view>
		<view class="flex my_center_item" @click="$emit('clickEvent',{name:names})">
			<view>
				<image :src="src" mode="" style="width: 30rpx;height: 30rpx;"></image>
				<text style="margin-left:10rpx ;">{{names}}</text>
			</view>
			<view class="flex">
				<slot name="item"></slot>
				<text v-if="showRight" style="padding-left: 10rpx;">></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-list-item",
		props:{
			src:{
				type:String,
				default:'../../static/tupian/jinbi.png'
			},
			names:{
				type:String,
				default:'都是我的',
			},
			showRight:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.my_center_item {
			justify-content: space-between;
			padding: 10rpx;
		}
</style>