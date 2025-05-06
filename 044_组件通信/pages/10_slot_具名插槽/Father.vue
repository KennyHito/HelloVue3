<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>热门游戏列表</h2>
        </template>
      </Category>

      <Category>
        <template v-slot:s2>
          <img :src="imgUrl" alt="">
        </template>
        <template v-slot:s1>
          <h2>今日美食城市</h2>
        </template>
      </Category>

      <Category>
        <!-- v-slot:s2 可以简写为 #s2 -->
        <template #s2>
          <video video :src="videoUrl" controls></video>
        </template>
        <!-- v-slot:s1 可以简写为 #s1 -->
        <template #s1>
          <h2>今日影视推荐</h2>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'
import { ref, reactive } from "vue";

let games = reactive([
  { id: 'asgytdfats01', name: '英雄联盟2' },
  { id: 'asgytdfats02', name: '王者农药2' },
  { id: 'asgytdfats03', name: '红色警戒2' },
  { id: 'asgytdfats04', name: '斗罗大陆2' }
])
let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let videoUrl = ref('https://media.w3.org/2010/05/sintel/trailer.mp4')

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>