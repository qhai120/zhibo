<template>
	<view class="direct_container">
		<!-- 头部开始 -->
		<view class="direct_Head flex" style="justify-content: space-between;">
			<view class="direct_Head_Left flex">
				<image class="text_yuan" src="../../static/phone.png" mode=""></image>
				<view class="direct_Head_Left_Right">
					<text style="display: block;color: white;">昵称</text>
					<text style="display: block;color: white;">1000</text>
				</view>
			</view>
			<view class="flex">
				<text class="text_inlin_block text_yuan" style="background-color: red;">+</text>
			</view>
			<view class="flex">
				<image v-for="(item,index) in 3" :key="index" style="margin-right: 10rpx;" class="text_yuan" src="../../static/phone.png" mode=""></image>
				<text class="text_inlin_block text_yuan" style="background-color: aqua;">1000</text>
			</view>
		</view>
		<!-- 头部结束 -->
		<!-- 金币区域开始 -->
		<view class="Gold">
			金币
			<text class="Gold_Num">1000</text>
		</view>
		<!-- 金币区域结束 -->
		<!-- 直播位置开始 -->
		<view class="video">
			<video :src="video" :controls="false" :autoplay="false" style="width: 99%;"></video>
		</view>
		<!-- 直播位置结束 -->
		<!-- 弹幕部分开始 -->
		<view class="barrage">
			111
		</view>
		<!-- 弹幕部分结束 -->
		<!-- 底部开始 -->
		<view class="flex direct_Bottom" >
			<input type="text" class="input_yuan" placeholder="说点什么...">
			<view class="flex direct_Bottom_Right ">
				<svg class="icon bottom_Icon" aria-hidden="true">
					<use xlink:href="#icon-jinbi"></use>
				</svg>
				<svg class="icon bottom_Icon" aria-hidden="true">
					<use xlink:href="#icon-liwu1"></use>
				</svg>
				<svg class="icon bottom_Icon" aria-hidden="true">
					<use xlink:href="#icon-fenxiang"></use>
				</svg>
				<svg class="icon bottom_Icon" aria-hidden="true">
					<use xlink:href="#icon-guanbi"></use>
				</svg>
			</view>
		</view>
		<!-- 底部结束 -->
	</view>
</template>

<script>
import { mapMutations,mapState,mapActions } from 'vuex';
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState('direct',['index','video'])
		},
		methods:{
		...mapMutations('direct',['changeIndex']),
		...mapActions('direct',['getVideo']),
		pullIndex(state){
			this.getOpenerEventChannel().on('pushIndex',(data)=>{
				this.changeIndex(data.Index)
			})
		}	
		},
		onLoad() {
			this.pullIndex()
			this.getVideo(this.$url+'/getVideo/video')
		}
	}
</script>

<style lang="less" scoped>
.direct_container{
	background-color: rgba(0, 0, 0, 0.4);
}
.direct_Head{
	padding: 5rpx;
	width: 750rpx;
	height: 100rpx;
	position: fixed;
	z-index: 1000;
	top: 0;
	.direct_Head_Left{
		.direct_Head_Left_Right{
			display: flex;
			flex-direction: column;
			justify-content: left;
			margin-left: 10rpx;
		}
	}
}
.Gold{
	position: fixed;
	top:120rpx;
	margin-left: 10rpx;
	z-index: 1000;
	color: orange;
	font-weight: 500;
	font-size: 35rpx;
	.Gold_Num{
		display: inline-block;
		margin-right: 10rpx;
		font-weight: 400;
		color: white;
		font-size: 30rpx
	}
}

.video{
	width: 100%;
	padding: 5rpx;
	box-sizing: border-box;
	padding-top: 400rpx;
}
.barrage{
	width: 100%;
	height: 470rpx;
	padding-bottom: 100rpx;
}
.direct_Bottom{
	position: fixed;
	bottom: 0;
	height: 100rpx;
	width: 100%;
	justify-content: space-between;
	padding: 10rpx;
	box-sizing: border-box;
	input{
		width: 40%;
		height: 80rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
	}
	.direct_Bottom_Right{
		font-size: 50rpx;
		.bottom_Icon{
			height: 70rpx;
			width: 70rpx;
			margin-right: 10rpx;
			border-radius: 50%;
		}
		.bottom_Icon:hover{
			background-color: orange;
		}
	}
}
</style>
