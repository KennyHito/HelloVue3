<template>
	<div class="app">
		<h2>{{ msg }}</h2>
		<input type="text" v-model="msg">
	</div>
</template>

<script setup lang="ts" name="App">
import { ref } from 'vue'
import useMsgRef from './useMsgRef'

// 使用Vue提供的默认ref定义响应式数据，数据一变，页面就更新
// let msg = ref('你好')

// 使用useMsgRef来定义一个响应式数据且有延迟效果
// 1、track  作用：它的功能是追踪某个依赖。当响应式数据被读取时，就会触发依赖收集操作。
// 2、trigger 作用：当响应式数据被修改时，借助 trigger 可以通知所有依赖该数据的地方进行更新。
let { msg } = useMsgRef('你好', 2000)

</script>

<style scoped>
.app {
	background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}

button {
	margin: 0 5px;
}
</style>