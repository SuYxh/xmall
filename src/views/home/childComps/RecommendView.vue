<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key = "item.acm">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{ item.title }}</div>
        </a>
    </div>
  </div>
</template>

<script>
	export default {
        name: "RecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
	}
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #eeeeee;
}
.recommend-item{
    flex:1;
}
  .recommend img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>