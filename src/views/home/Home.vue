<template>
  <div id="home">
     <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <h2>首页</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/common/navbar/NavBar'
import { getHomeMultidata } from '@/api/home.js'
 
export default {
  name: 'Home',
  components:{
    NavBar
  },
  created(){
    getHomeMultidata().then(res => {
      console.log('数据请求成功！')
      this.results = res
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      console.log(res)
      console.log(res.data.banner.list)
      console.log(res.data.recommend.list)
    })
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
}
</script>

<style scoped>
#home{
  width: 100%;
}

.nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>