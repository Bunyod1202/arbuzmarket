// src/stores/lang.js
import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => ({
    selectedLang: localStorage.getItem('language') || 'uz', // Default language
  }),

  actions: {
    // Update the language
    setLanguage(lang) {
      this.selectedLang = lang
      localStorage.setItem('language', lang)
    },
  },
})
