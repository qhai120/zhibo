<template>
	<scroll-view scroll-y  style="height: 300rpx;" >
			<view v-for="(item,index) in num" :key="index" class="row" :ref="'item'+index" >
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
			send(gift){
				console.log(gift)
			}
		},
		created(){
			this.addNum()
		}
	}
</script>

<style lang="less">
.row{
	flex-direction: row;
}
</style>