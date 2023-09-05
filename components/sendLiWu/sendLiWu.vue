<template>
	<view>
		<uni-popup ref='sendliwu' type="bottom">
			<view class="sendliwu">
				<view class="sendliwu_Top row">
					<view class="">
						礼物
					</view>
					<image src="../../static/tupian/guanbi.png" mode="" style="width: 50rpx;height: 50rpx;" @click="close"></image>
				</view>
				<view class="sendliwu_Center row">
					<view v-for="(item,index) in list" @click="changeActiveId(item.id)" :key="item.id" :class="['sendliwu_Center_Item',activeId===item.id?'active':'']">
						<image :src="item.image" mode="" style="width: 100rpx; height: 100rpx;"></image>
						<view class="row">
							<text style="color: orange">{{item.name}}</text><text
								style="margin-left: 10rpx;">{{item.coin}}</text>
						</view>
					</view>
				</view>
				<view class="sendliwu_Bottom row">
					<button class="button_small" style="background-color: orange;" @click="goBalance">充值</button>
					<button class="button_small" style="margin-left: 20rpx; background-color: aqua;"
						@click="send">发送</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import lists from '@/demon/demon.js'
	import {mapMutations,mapState} from "vuex"
	export default {
		name: "sendLiWu",
		data() {
			return {
				list: '',
				activeId: 0
			};
		},
		computed:{
			...mapState('direct',['jinbi']),
			computeBalance(){
				let item=this.list.findIndex(item=>item.id===this.activeId)
				let  num=this.jinbi-this.list[item].coin
				return {item:item,num:num}
			}
		},
		methods: {
			...mapMutations('direct',['changeLiwu','decreaseJinbi']),
			opensend() {
				this.$refs.sendliwu.open('bottom')
			},
			close() {
				this.$refs.sendliwu.close()
			},
			changeActiveId(id) {
				this.activeId=id
			},
			send() {
				if (this.activeId === 0) {
					return uni.showToast({
						icon:"error",
						mask:true,
						title: "无选中礼物",
						duration: 1000,
					})
				} else {
					const {item,num}=this.computeBalance
					if(item!=-1){
						if(num>0){
							this.changeLiwu(this.list[item])
							this.decreaseJinbi(num)
						}
						else{
							return uni.showToast({
								icon:"error",
								title:"金币不足"
							})
						}
					}
				}
			},
			goBalance(){
				uni.navigateTo({
					url:'/pages/balance/balance',
					success: (res) => {
						res.eventChannel.emit('jump',{message:'从直播间转跳来的'})
					}
				})
			}
		},
		created() {
			this.list = lists.lists
		}
	}
</script>

<style lang="less" scoped>
	.row {
		flex-direction: row;
	}
	.active{
		background-color: #f5f5f5;
	}
	.sendliwu {
		height: 500rpx;
		width: 750rpx;
		background-color: white;
		padding: 10rpx;
		flex-direction: column;

		.sendliwu_Top {
			height: 50rpx;
			width: 730rpx;
			padding-bottom: 10rpx;
			line-height: 45rpx;
			text-align: center;
			justify-content: space-between;
			align-items: center;
			border-bottom: 2rpx solid #f5f5f5;
		}

		.sendliwu_Center {
			flex-wrap: wrap;
			font-size: 20rpx;
			
			.sendliwu_Center_Item {
				width: 182rpx;
				justify-content: center;
				align-items: center;
				margin-bottom: 10rpx
			}
		}

		.sendliwu_Bottom {
			margin-top: 30rpx;
			padding: 10rpx;
			padding-left: 450rpx;
			align-items: center;

			.button_small {
				height: 60rpx;
				width: 120rpx;
				text-align: center;
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
</style>