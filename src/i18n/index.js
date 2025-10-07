import { createI18n } from 'vue-i18n'


const messages = {
  zh: {
    nav: {
      daka: '打卡景点',
      food: '美食推荐',
      metro: '地铁线路',
    },
    common: { title: 'menu', switch: '中 / EN' },
  },
  en: {
    nav: {
      daka: 'Attractions',
      food: 'Food',
      metro: 'Metro Lines',
    },
    common: { title: 'menu', switch: 'EN / 中' },
  },
}


const localeFromCache = localStorage.getItem('locale') || 'zh'

export const i18n = createI18n({
  legacy: false,            // 组合式 API
  locale: localeFromCache,  // 默认语言
  fallbackLocale: 'en',
  messages,
})