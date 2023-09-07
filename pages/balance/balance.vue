<template>
	<view class="balance_container boder-box">
		<view class="balance_Top boder-box white">
			<text style="margin-top: 20rpx;">当前金币</text>
			<text style="margin-top: 50rpx; font-size: 100rpx;">{{jinbi}}</text>
		</view>
		<view class="balance_Center boder-box">
			<text>请选择充值的金币</text>
			<view class="flex flex-wrap">
				<view  v-for="(item,index) in list" :key="index" :class="['balance_Center_congzhi','boder-box',active===index?'active':'']" @click="congzhi(item)">
					<view>
						<image src="../../static/tupian/jinbi.png" mode="" style="width: 50rpx;height: 50rpx;vertical-align: middle;"></image>
						<text style="margin-left: 6rpx;font-size: 35rpx;line-height: 50rpx;">{{item.coin}}</text>
					</view>
					<text style="margin-top: 30rpx;font-size: 40rpx;color: #e4e4e4;">￥{{item.money}}</text>
				</view>
				<view class="balance_Center_congzhi boder-box" style="justify-content: center" @click="zhiDingYi">
					<text >自定义</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import lists from '../../demon/demon.js'
	import   {mapState,mapMutations}   from "vuex"
	export default {
		data() {
			return {
				list:[],
				active:0
			};
		},
		computed:{
			...mapState('direct',['jinbi'])
		},
		methods:{
			...mapMutations('direct',['increaseJinbi']),
			congzhi(item){
				this.active=this.list.indexOf(item)
				uni.showModal({
					content:`是否充值${item.coin}金币?`,
					success: (res) => {
						if(res.confirm){
							this.increaseJinbi(item.coin)
						}else{
							return
						}
					}
				})
			},
			zhiDingYi(){
				this.active=6;
				uni.showModal({
					editable:"true",
					title:"充值",
					placeholderText:"请输入充值的数量",
					success: (res) => {
						if(res.cancel){
							return
						}else{
							let money=+res.content;
							if(money<110){
								return uni.showToast({
									icon:"error",
									title:"请输入大于110"
								})
							}else{
								uni.showModal({
									content:`是否充值${money}金币?`,
									success: (res) => {
										if(res.confirm){
											this.increaseJinbi(money)
										}else{
											return
										}
									}
								})
							}
						}
					}
				})
			}
		},
		created() {
			this.list=lists.jine
		},
		onLoad(){
			this.getOpenerEventChannel().on('jump',(data)=>{
				console.log(data)
			})
		}
	}
</script>

<style lang="less">
.balance_container{
	padding: 20rpx;
	.balance_Top{
		width: 100%;
		height: 300rpx;
		display: flex;
		flex-direction: column;
		background-color: skyblue;
		text-align: center;
		padding: 20rpx;
	}
	.balance_Center{
		margin-top: 20rpx;
		padding: 20rpx;
		border-top: 2rpx solid #f5f5f5;
	}
	.balance_Center_congzhi{
		width: 200rpx;
		height: 150rpx;
		padding: 10rpx;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 2rpx solid #f5f5f5;
	}
}
.active{
	background-color: orange;
}
</style>
