<template>
	<view class="content">
		<!-- 轮播图开始 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			style="width: 750rpx; height: 250rpx;">
			<swiper-item>
				<view class="swiper-item">
					<image src="@/static/banner/banner_1.png" mode="" class="banner-img"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="@/static/banner/banner_2.png" mode="" class="banner-img"></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- 轮播图结束 -->
		<!-- 首页列表 -->
		<view class="flex flex-wrap" style="width: 750rpx;">
			<view v-for="(item,index) in 6" :key="index" @click="goToDirect(index)" class="center-img rounded">
				<image src="../../static/cneter/history_goods_1.jpg" style="width: 330rpx;height: 330rpx;" mode="">
				</image>
				<view class="flex image-top" style="top:10rpx">
					<view class="boder-yuan boder-bgc">
						<image src="../../static/tupian/jinbi.png" style=" width: 40rpx;
						height: 40rpx;vertical-align:bottom;" mode=""></image>
						<view style="padding-left: 10rpx;">   0</view>
					</view>
					<view class="boder-yuan boder-bgc"><text>热度: 0</text></view>
				</view>
				<view class="flex image-bottom" style="bottom: 10rpx;">
					<view class="boder-yuan boder-bgc"><text>标题</text></view>
					<view class="boder-yuan boder-bgc">
						<image src="../../static/tupian/zhibozhong.png" style="width: 40rpx;
						height: 40rpx;vertical-align: bottom" mode=""></image>
						<text>直播中</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 首页列表页面结束 -->
	</view>
</template>

<script>
	import lists from '../../demon/demon.js'
	import {
		mapState,mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
		},
		methods: {
			...mapMutations('moduleA',['goToDirect'])
		},
		computed: {
			...mapState('moduleA', ['age'])
		}
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.banner-img {
		width: 750rpx;
		height: 250rpx;
	}

	.center-img {
		width: 350rpx;
		height: 350rpx;
		background-color: aqua;
		padding: 10rpx;
		box-sizing: border-box;
		margin-top: 10rpx;
		position: relative;
	}

	.image-top,
	.image-bottom {
		position: absolute;
		width: 90%;
		left: 15rpx;
		justify-content: space-between;

		.boder-bgc {
			display: flex;
			background-color: rgba(0,0,0,0.4);
			align-items: center;
			color: white;
			height: 40rpx;
			padding: 4rpx 20rpx;
			text-align: center;
		}
	}
</style>