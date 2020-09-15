<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
import { getHomeMultidata } from '@/api/home.js'
 
export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []}
      },
    }
  },
  created(){
    getHomeMultidata().then(res => {
      console.log('数据请求成功！')
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      // console.log(res)
      console.log(res.data.banner.list)
      console.log(res.data.recommend.list)
    })
  },
  data() {
    return {
      data:null,
      banners: [],
      recommends: []
    }
  },
}
</script>

<style scoped>
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
</style>