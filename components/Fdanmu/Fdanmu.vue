<template>
	<view>
		<scroll-view scroll-y="true"  style="height: 650rpx;" scroll-with-animation  :show-scrollbar="false" :scroll-into-view="scrollinto">
				<view v-for="(item,index) in list" :key="item.id" :id="'text'+item.id">
					<view class="danmu_text">
						<text class="text1" style="color: red;">{{item.name}}:</text>
						<text class="text1" style="color: white">{{item.text}}</text>
					</view>
				</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"Fdanmu",
		data() {
			return {
				list:[
					{id:0, name:'老0',text:'老0来了'},
					{id:1,name:"老1",text:"老1来了"}
				],
				scrollinto:'text0'
			};
		},
		methods:{
			// 发送弹幕
			addList(text){
				let num=this.list.length
				const newList={
					id:num,
					name:'老'+num,
					text:`${text}`
				}
				this.list.push(newList)
				
			}
		},
		mounted() {
			// 弹幕滚动
			setInterval(()=>{
				// 要等待一定时间让dom渲染，不然会找不到最新的id,scroll_into-view
				setTimeout(()=>{
					let num=this.list.length
					if(num>0 && this.list[num-1] ){
						this.scrollinto='text'+this.list[num-1].id
					}
				},1000)
			},2000)
		}
	}
</script>

<style lang="less" scoped>
.danmu_text{
	flex-direction: row;
	padding: 10rpx;
	padding-left: 20rpx;
	.text1{
		font-weight: 500;
		letter-spacing: 4rpx;
		font-size: 30rpx;
		line-height: 40rpx;
		margin-right: 10rpx;
		text-align: left;
	}
}
</style>