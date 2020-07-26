<template>
  <div id="home">
     <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <h2>首页</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'Home',
  components:{
    NavBar
  }
}
</script>

<style scoped>
.nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>