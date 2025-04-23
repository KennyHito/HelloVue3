<!-- 结构 -->
<template>
  哈哈哈
</template>

<!-- 逻辑处理 -->
<script setup lang='ts' name='TestTwo'>
// 引入其他组件
import { onMounted } from 'vue';
onMounted(() => {
  //函数体
  console.log('⚠️测试打印的内容:--->', "onMounted");
})
</script>

<!-- 样式 -->
<style scoped lang='less'></style>