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
    $this.title = "公安研判平台";
  }
};
</script>
<style src="./Header.scss" lang="scss"></style>