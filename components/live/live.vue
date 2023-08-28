<template>
	<list style="height: 300rpx;"  :show-scrollbar="false" >
			<cell v-for="(item,index) in num" :key="index" class="row" :ref="'item'+index" insert-animation="default" delete-animation="default" >
					<view :class="['boder_liwu_left','row']" style="align-items: center;">
						<image src="../../static/phone.png" class="text_yuan" mode=""></image>
						<view class="direct_Head_Left_Right" style="width: 150rpx;">
							<text style="display: block;color: white;">昵称</text>
							<text style="display: block;color: white;">送皇冠</text>
						</view>
						<image src="../../static/tupian/liwu2.png"  style="width: 80rpx;
						height: 80rpx;" mode=""></image>
					</view>
					<text class="boder_liwu_right">x1</text>
			</cell>
	</list>
</template>

<script>
	const dom = uni.requireNativePlugin('dom')
	import { mapMutations,mapState,mapActions } from 'vuex';
	export default {
		name:"live",
		data() {
			return {
				
			};
		},
		computed:{
			...mapState('direct',['num'])
		},
		methods:{
			...mapMutations('direct',['addNum','resetNum']),
			// 底部显示礼物
			tobottom(){
				this.$nextTick(()=>{
					let index=this.num -1;
					let ref='item'+index;
					if(this.$refs[ref]){
						dom.scrollToElement(this.$refs[ref][0],{})
					}
				})
			},
			addnums(){
				let num=setInterval(()=>{
					this.addNum()
					this.tobottom()
				},2000)
			},
			send(gift){
				console.log(gift)
			}
		},
		created(){
			this.addnums()
		}
	}
</script>

<style lang="less">
.row{
	flex-direction: row;
}
.boder_liwu_right{
		width: 80rpx;
		height: 80rpx;
		margin-left: 10rpx;
		color: orange;
		font-size: 60rpx;
		line-height: 80rpx;
	}
</style>