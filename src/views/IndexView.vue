<script>
  import panda from '@/assets/panda.png'
  import title from '@/assets/welcomeToChengdu.png'
  export default {
    name: "IndexView",
    data() {
    return {
      images: {
        panda,
        title,
      },
      fit: 'cover',
    }
  },
  };
</script>


<template>
  <el-container class="h-screen w-screen">

      <!-- 左侧导航栏 -->
      <el-aside width="300px" class="mt-20  border-black-400 flex flex-col items-center">
            
        <el-image style="width: 260px; height: 260px" :src="images.panda" :fit="fill" />
        <el-image style="width: 130px; height: 80px" :src="images.title" :fit="scale-down" />

            <el-menu default-active="1" class="mt-6 text-center border-black-400 w-[300px] border-r-0">
              <el-menu-item index="1" class="justify-center text-2xl h-70px">
                <!-- <span>打卡景点</span> -->
                 <span>{{ $t('nav.daka') }}</span>
              </el-menu-item>
              <el-menu-item index="2" class="justify-center text-2xl h-70px">
                <!-- <span>美食推荐</span> -->
                 <span>{{ $t('nav.food') }}</span>
              </el-menu-item>
              <el-menu-item index="3" class="justify-center text-2xl h-70px">
                <!-- <span>地铁线路</span> -->
                 <span>{{ $t('nav.metro') }}</span>
              </el-menu-item>
            </el-menu>
      </el-aside>
      
      <el-main class="border border-black-400">

      </el-main>
  </el-container>

</template>




<style scoped>

</style>