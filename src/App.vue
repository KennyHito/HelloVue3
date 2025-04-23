<!-- 结构 -->
<template>
  <div class="app-box">
    <span>{{ msg }}</span>
    <TestOne />
    <TestTwo />
  </div>
</template>

<!-- 逻辑处理 -->
<script lang="ts" setup name="App">
// 引入其他组件
import { ref } from "vue";
import TestOne from "@/components/TestOne.vue"
import TestTwo from "@/components/TestTwo.vue"

let msg = ref("你好,世界!")
</script>


<!-- 样式 -->
<style scoped>
.app-box {
  padding: 20px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>