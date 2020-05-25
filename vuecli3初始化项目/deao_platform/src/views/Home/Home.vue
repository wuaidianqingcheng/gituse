<template>
  <div id="content" class="content">
    <commonHeader />
    <section id="content-bottom">123123</section>
  </div>
</template>
<script>
import { HomeData } from "@httpRequest/axiosAPI.js";
import commonHeader from "@components/Header/Header";
export default {
  name: "Home",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    commonHeader
  },
  mounted() {
    const $this = this;
    //  数据请求
    HomeData({
      pageNum: 1,
      pageSize: 10
    }).then(res => {
      $this.msg = res.msg;
    });
  }
};
</script>
<style lang="scss" src="./Home.scss">
</style>