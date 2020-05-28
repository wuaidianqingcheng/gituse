<!--
 * @Author: WH
 * @Date: 2020-05-18 14:31:18
 * @LastEditors: WH
 * @LastEditTime: 2020-05-26 09:46:45
 * @Description: file content
 * @FilePath: \deao_platform\src\components\Header\Header.vue
--> 
<template>
  <header id="header">
    <div id="time">123</div>
    <div id="second">456</div>
    <div id="title">{{title}}</div>
  </header>
</template>
<script>
export default {
  name: "commonHeader",
  data() {
    return {
      title: "123"
    };
  },
  mounted() {
    const $this = this;
    $this.title = "执法监督平台";
  }
};
</script>
<style src="./Header.scss" lang="scss"></style>