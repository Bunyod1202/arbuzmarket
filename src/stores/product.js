// stores/product.js
import { defineStore } from 'pinia'
import { useLangStore } from 'src/stores/lang.js'
import axios from 'axios'

const langStore = useLangStore()
export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    pages: null,
  }),
  actions: {
    async fetchProducts(id, page = 1) {
      try {
        const response = await axios.post(
          'https://arbuzmarket.com/api/v1/Products/filters',
          {
            page,
            size: 1000,
            categoryId: String(id),
            tab: null,
          },
          {
            headers: {
              Language: langStore.selectedLang,
            },
          },
        )

        this.products = response.data.item

        if (this.products.length < 12) {
          this.pages = null
        } else {
          this.pages = page + 1
        }
      } catch (err) {
        console.error('❌ Product fetch error:', err)
      }
    },
  },
})
