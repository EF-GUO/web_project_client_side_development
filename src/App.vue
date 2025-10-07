<script setup>
import { RouterView } from 'vue-router'


import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const { locale, t } = useI18n()
const elLocale = computed(() => (locale.value === 'zh' ? zhCn : en))
const toggleLocale = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  localStorage.setItem('locale', locale.value)
}

</script>


<template>
  <RouterView />
</template>

<style>

html, body, #app{
  height: 100%;
  margin: 0;      /* 关键：去掉浏览器默认外边距 */
  padding: 0;
  box-sizing: border-box;
}

</style>