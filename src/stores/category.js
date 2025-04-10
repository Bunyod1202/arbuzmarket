// src/stores/category.js
import { defineStore } from 'pinia'
import { useLangStore } from 'src/stores/lang.js'
import axios from 'axios'
const langStore = useLangStore()
export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [], // Stores all categories
    categoryOptions: [], // Stores category options for select/dropdown
  }),

  actions: {
    // Fetch categories and set category options
    async fetchCategory() {
      try {
        const response = await axios.get('https://arbuzmarket.com/api/v1/Categories', {
          headers: { Language: langStore.selectedLang },
        })

        // Remove the last category (if needed, this is common for the 'See all' category)
        const items = response.data.item
        items.pop()
        // Set categories and category options
        this.categories = items
        this.categoryOptions = items.map((item) => ({
          value: item.id,
          label: item.name,
          icon: item.icon?.url || '', // Safe access for icon
        }))
      } catch (error) {
        console.error('❌ Error fetching categories:', error)
      }
    },
  },
})
