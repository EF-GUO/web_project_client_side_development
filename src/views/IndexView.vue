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
      <el-aside width="300px" class="aside-left">
            
        <el-image style="width: 140px; height: 140px" :src="images.panda" fit="fill" />
        <el-image style="width: 200px; height: 120px" :src="images.title" fit="scale-down" />

            <el-menu 
            router :default-active="$route.path"
            default-active="/daka" 
            class="menu-left"
            >
              <el-menu-item index="/daka"  class="menu-item">
                <el-icon size="30"><House /></el-icon>
                 <span  class="ml-10px">{{ $t('nav.daka') }}</span>
              </el-menu-item>
              <el-menu-item index="/meishi" class="menu-item">
                <el-icon size="30"><Food /></el-icon>
                 <span  class="ml-10px">{{ $t('nav.food') }}</span>
              </el-menu-item>
              <el-menu-item index="/ditie" class="menu-item">
                <el-icon size="30"><MapLocation /></el-icon>
                 <span class="ml-10px">{{ $t('nav.metro') }}</span>
              </el-menu-item>
            </el-menu>

            <span class="absolute bottom-4 left-4 text-sm">JonZuo</span>
      </el-aside>
     
      <el-main class="min-w-0 p-0">
        <el-scrollbar>
            <div class="h-screen-2xl">
              <RouterView />
            </div>
        </el-scrollbar>
      </el-main>
       
  </el-container>

</template>




<style scoped>



.aside-left{
  @apply sticky top-0 h-screen pt-10 border-r overflow-hidden flex flex-col items-center;
}

.menu-left{
  @apply mt-20 text-center border-black-400 w-[300px] border-r;
}

.menu-item {
  @apply text-lg m-10px h-50px rounded-2xl;
}



</style>