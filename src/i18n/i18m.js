import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next'
    }
  },
  vi: {
    translation: {
      'Welcome to React': 'Chào mừng đến với React và react-i18next'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
