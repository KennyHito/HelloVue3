<!-- 结构 -->
<template>
  <div>{{ a }}</div>
</template>

<!-- 逻辑处理 -->
<script lang="ts" name="Test" setup>
// 引入其他组件
import { ref } from 'vue'

let a = ref(100)

</script>


<!-- 样式 -->
<style scoped lang='less'></style>