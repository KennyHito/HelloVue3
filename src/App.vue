<!-- 结构 -->
<template>
  <div class="app-box">
    <span>你好,世界!</span>
    <TestOne />
    <TestTwo />
  </div>
</template>

<!-- 逻辑处理 -->
<script lang="ts">
// 引入其他组件
import TestOne from "@/components/TestOne.vue"
import TestTwo from "./components/TestTwo.vue";
export default {
  components: {
    TestOne,
    TestTwo
  },
  name: 'App',
}
</script>


<!-- 样式 -->
<style scoped>
.app-box {
  padding: 20px;
  color: white;
  background-color: orange;
  height: 100px;
  border-radius: 10px;
}
</style>