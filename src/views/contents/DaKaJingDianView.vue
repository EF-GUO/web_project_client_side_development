<template>

  <!-- 记载显示 -->
  <el-skeleton v-if="loading" :rows="4" animated class="w-[1200px] mx-auto mt-100px" />

  <!-- 列表信息 -->
  <div v-else class="flex flex-col ml-150px mt-50px">

    <el-card v-for="s in spots" :key="s.id" class="content-item">
        <div class="flex relative items-center gap-6">
          <!-- <el-image style="width: 700px; height: 500px" :src="imgs" :fit="fit" class="rounded-8px" /> -->

          <!-- 左侧轮播图 -->
          
          <div class="flex-shrink-0 w-[700px] h-[500px]">
            <el-carousel height="500px" class="">
              <el-carousel-item  v-for="(src, i) in s.images" :key="i">
                <el-image :src="src" fit="cover" class="w-full h-full rounded-xl" />
              </el-carousel-item>
            </el-carousel>
          </div>

          <!-- 详细描述 -->
          <div class="w-400px absolute top-40px right-10px  ">
            <h2 class="text-2xl font-bold mb-4">{{ s.title }}</h2>
            
            <p class="text-gray-600 leading-relaxed text-lg leading-relaxed line-clamp-3">{{ s.desc }}</p>
          </div>

          <!-- 按钮 -->
          <el-button  type="primary" round class="w-[150px] h-[50px] absolute bottom-100px right-30px">了解更多</el-button>

          <!-- 地址 -->
          <div class="w-400px absolute bottom-10px right-10px">
            <span class="mt-10px">地址：{{ s.address }}</span>
          </div>
        </div>

    </el-card>



  </div>
  


</template>
<script setup>
  import { ref, onMounted } from 'vue'
  import { fetchSpot } from '@/api/spot'   // 或者 fetchSpots
  const spots = ref([])         // 景点数组
  const loading = ref(false)

  onMounted(async () => {
    loading.value = true


    // 如果返回 { list, total }：
    const {total,list} = await fetchSpot()
    spots.value = list

    loading.value = false
  })

</script>

<style>
  .content-item{
    @apply mt-50px rounded-8px w-[1200px];
  }
</style>