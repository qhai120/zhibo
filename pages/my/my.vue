<template>
	<view>
		<!-- 头部区域 -->
		<view class="flex my_top boder-box ">
			<view class="flex my_top_left">
				<image src="../../static/phone.png" mode="" class="my_top_left_image"></image>
				<view class="flex column">
					<text>昵称</text>
					<text>描述</text>
				</view>
			</view>
			<view class="flex my_top_right boder-box" @click="gotozhiliao">
				<text>编辑资料</text>
			</view>
		</view>
		<!-- 中心区域 -->
		<view class="my_center boder-box">
			<myList :showRight="false" :names="'我的金币'" @clickEvent='clickEvent'>
				<template #item>
					<text>{{jinbi}}金币</text>
					<navigator open-type="navigate" url="../balance/balance" style="margin-left: 20rpx;color: orange;"><text>立即充值</text></navigator>
				</template>
			</myList>
			<my-list :src="'../../static/tupian/liwu2.png'" :names="'我的直播'" @clickEvent='clickEvent'>
				<template #item>
					<text>0</text>
				</template>
			</my-list>
			<my-list :src="'../../static/tupian/liwu2.png'" :names="'我的关注'" @clickEvent='clickEvent'>
				<template #item>
					<text>0</text>
				</template>
			</my-list>
			<my-list :src="'../../static/tupian/liwu2.png'" :names="'历史记录'" @clickEvent='clickEvent'>
				
			</my-list>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import  myList from '../../components/my-list-item/my-list-item.vue'
	export default {
		data() {
			return {

			}
		},
		components:{
			myList
		},
		computed: {
			...mapState('direct',['jinbi'])
		},
		methods: {
			clickEvent(e){
				console.log(e.name)
			},
			gotozhiliao(){
				uni.navigateTo({
					url:'/pages/nvues/nvues'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.my_top {
		height: 250rpx;
		width: 100%;
		padding: 20rpx;
		padding-right: 30rpx;
		justify-content: space-between;

		.my_top_left {
			width: 270rpx;

			.my_top_left_image {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
				background-color: orange;
			}
		}

		.my_top_right {
			border: 1rpx solid #1495e7;
			padding: 20rpx;
			color: #1495e7;
		}
	}

	.my_center {
		width: 100%;
		border-top: 6rpx solid #f5f5f5;
		padding: 10rpx;
	}
</style>