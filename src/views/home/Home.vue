<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl class="tab-control"  :titles="['流行','新款','精选']"></TabControl>
    <ul>
      <li v-for="i in 100">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from '@/components/content/tabControl/TabControl'

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import { getHomeMultidata } from "@/api/home.js";

export default {
  name: "Home",
  components: {
     NavBar,
      // Scroll,
      TabControl,
      // BackTop,
      HomeSwiper,
      FeatureView,
      RecommendView,
      // GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log("数据请求成功！");
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(res)
      console.log(res.data.banner.list);
      console.log(res.data.recommend.list);
    });
  },
  data() {
    return {
      data: null,
      banners: [],
      recommends: [],
    };
  },
};
</script>

<style scoped>
.tab-control{
  position: sticky;
  position: -webkit-sticky;
  top: 44px;
}

#home {
  /*position: relative;*/
  /* height: 100vh; */
  /* padding-top: 44px; */
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  position: sticky;
  top: 0;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99; */
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