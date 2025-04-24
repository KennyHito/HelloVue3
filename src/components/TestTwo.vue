<!-- 结构 -->
<template>
  <div>我是TestTwo组件,{{ name }}</div>
</template>

<!-- 逻辑处理 -->
<script setup lang='ts' name='TestTwo'>
// 引入其他组件
import { ref, onMounted } from 'vue';
const name = ref('马六');
onMounted(() => {
  //函数体
  console.log('⚠️测试打印的内容:--->', "onMounted");
})
</script>

<!-- 样式 -->
<style scoped lang='less'></style>