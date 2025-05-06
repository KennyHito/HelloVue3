<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食城市">
        <img :src="imgUrl" alt="">
      </Category>
      <Category title="今日影视推荐">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'
import { ref, reactive } from "vue";

let games = reactive([
  { id: 'asgytdfats01', name: '英雄联盟1' },
  { id: 'asgytdfats02', name: '王者农药1' },
  { id: 'asgytdfats03', name: '红色警戒1' },
  { id: 'asgytdfats04', name: '斗罗大陆1' }
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
</style>