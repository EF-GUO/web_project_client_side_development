<template>
  <div class="bg-gray-50 py-12">
    <div class="w-[1300px] mx-auto flex gap-6">
      <!-- ===== 左侧美食卡片列表 ===== -->
      <section class="flex-1">
        <!-- 骨架屏 -->
        <el-skeleton v-if="loadingFoods" :rows="4" animated class="w-[700px] mx-auto mt-6" />

        <!-- 列表 -->
        <div v-else class="flex flex-col ml-20px">
          <el-card
            v-for="f in foods"
            :key="f.id"
            class="w-[960px] hover:shadow-md transition-all duration-200 mb-40px"
          >
            <div class="flex relative gap-6">
              <!-- 左侧轮播图 -->
              <div class="flex-shrink-0 w-[500px] h-[350px]">
                <el-carousel height="350px" indicator-position="outside">
                  <el-carousel-item v-for="(src, i) in f.images" :key="i">
                    <el-image
                      :src="src"
                      fit="cover"
                      class="w-full h-full rounded-lg select-none pointer-events-none"
                    />
                  </el-carousel-item>
                </el-carousel>
              </div>

              <!-- 右侧文字 -->
              <div class="w-[350px] absolute top-20px right-10px">
                <h2 class="text-xl font-bold mb-3">{{ f.title }}</h2>
                <p class="text-gray-600 text-base leading-relaxed">
                  {{ truncateText(f.desc) }}
                </p>
              </div>

              <!-- 按钮 -->
              <el-button type="primary" class="w-[100px] h-[40px] absolute bottom-40px right-10px">
                了解更多
              </el-button>
            </div>
          </el-card>
        </div>
      </section>

      <!-- ===== 右侧美食排行榜 ===== -->
      <aside class="w-[250px] ml-80px">
        <el-affix :offset="80">
          <el-card shadow="never" class="no-border">
            <template #header>
              <div class="flex items-center justify-between">
                <span class="font-semibold">热度榜</span>
              </div>
            </template>

            <div
              v-for="(item, idx) in rankList"
              :key="item.id"
              class="flex items-center justify-between mb-16px"
            >
              <div class="flex items-center gap-3">
                <!-- 名次徽标 -->
                <el-tag :type="idx < 3 ? 'danger' : 'info'" round class="w-7 flex justify-center">
                  {{ idx + 1 }}
                </el-tag>

                <!-- 封面图片 -->
                <el-avatar :size="44" shape="circle" :src="item.cover" />

                <!-- 名称 + 进度条 -->
                <div class="min-w-0">
                  <div class="font-medium truncate w-[120px]">
                    {{ item.title }}
                  </div>
                  <el-progress
                    :percentage="item.score"
                    :stroke-width="8"
                    :show-text="false"
                    class="mt-1"
                  />
                </div>
              </div>
            </div>
          </el-card>
        </el-affix>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchFood } from '@/api/food'

const foods = ref([])
const loadingFoods = ref(false)

// 截断文本
function truncateText(text, limit = 100) {
  if (!text) return ''
  return text.length > limit ? text.slice(0, limit) + '...' : text
}

// 榜单数据
const rankList = ref([
  { id: 1, title: '火锅', cover: '/imgs/food/food_hot_pot_01.jpg', score: 95, votes: 2300 },
  { id: 2, title: '烤鱼', cover: '/imgs/food/food_kaoyu_01.jpg', score: 91, votes: 1880 },
  { id: 3, title: '钵钵鸡', cover: '/imgs/food/food_boboji_01.jpg', score: 87, votes: 1660 },
  { id: 4, title: '蹄花', cover: '/imgs/food/food_tihua_01.jpg', score: 80, votes: 1320 },
])

onMounted(async () => {
  loadingFoods.value = true
  const { list: foodList } = await fetchFood()
  foods.value = foodList
  loadingFoods.value = false
})
</script>

<style scoped>
.content-item {
  @apply mt-8 rounded-xl w-[960px];
}

.no-border {
  border: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
}
</style>
