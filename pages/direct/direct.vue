<template>
	<view>
		<text :class="['gren',index==1?'select':'']">这里是详细的直播页面</text>
	</view>
</template>

<script>
import { mapMutations,mapState } from 'vuex';
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState('direct',['index'])
		},
		methods:{
		...mapMutations('direct',['changeIndex']),
		pullIndex(state){
			this.getOpenerEventChannel().on('pushIndex',(data)=>{
				this.changeIndex(data.Index)
			})
		}	
		},
		onLoad() {
			this.pullIndex()
		}
	}
</script>

<style lang="less">
.gren{
	color: red;
}
.select{
	color: orange;
}
</style>
