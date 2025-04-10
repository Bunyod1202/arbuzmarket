<template>
  <div>
    <div class="mobile_bar">
      <q-select
        class="lang-select"
        v-model="selectedLang"
        @update:model-value="changeLanguage"
        :options="languageOptions"
        borderless
        dense
        emit-value
        map-options
        style="max-width: 150px"
      >
        <template v-slot:selected-item="props">
          <q-item v-bind="props.itemProps" class="selected-item">
            <q-item-section avatar>
              <q-img width="20px" :src="`/${props.opt.icon}`" :alt="props.opt.label" />
            </q-item-section>
            <q-item-section>{{ props.opt.label }}</q-item-section>
          </q-item>
        </template>
        <template v-slot:option="props">
          <q-item v-bind="props.itemProps" class="option-item">
            <q-item-section avatar>
              <q-img width="20px" :src="`/${props.opt.icon}`" :alt="props.opt.label" />
            </q-item-section>
            <q-item-section>{{ props.opt.label }} </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-select
        class="category-select"
        v-if="pages == 1"
        v-model="selectedCategory"
        @update:model-value="changeCategory"
        :options="categoryStore.categoryOptions"
        borderless
        dense
        emit-value
        map-options
        style="max-width: 500px"
      >
        <template v-slot:selected-item="props">
          <q-item v-bind="props.itemProps" class="selected-item">
            <q-item-section avatar>
              <q-img width="30px" :src="props.opt.icon" :alt="props.opt.label">
                <template v-slot:loading>
                  <div class="text-subtitle1 text-white">
                    <q-skeleton type="QAvatar" size="25px" class="bg-orange img-skeleton" square />
                  </div>
                </template>
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-negative text-white">
                    Cannot load image
                  </div>
                </template>
              </q-img>
            </q-item-section>
            <q-item-section
              style="margin-left: 10px"
              class="selected-category-name text-nowrap text-weight-bold"
            >
              {{ props.opt.label }}
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:option="props">
          <q-item v-bind="props.itemProps" class="option-item">
            <!-- <a href="#product-cards" class="category-option-item"> -->
            <q-item-section avatar>
              <q-img width="25px" :src="props.opt.icon" :alt="props.opt.label">
                <template v-slot:loading>
                  <div class="text-subtitle1 text-white">
                    <q-skeleton type="QAvatar" size="25px" class="bg-orange img-skeleton" square />
                  </div>
                </template>
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-negative text-white">
                    Cannot load image
                  </div>
                </template>
              </q-img>
            </q-item-section>
            <q-item-section style="margin-left: 10px">{{ props.opt.label }} </q-item-section>
            <!-- </a> -->
          </q-item>
        </template>
      </q-select>

      <h5 class="text-h5 category-name text-weight-bold" v-else>{{ $t('categoryList') }}</h5>

      <button class="btn back-btn" v-if="pages > 0" @click="returnPage()">
        {{ $t('back') }}
      </button>
    </div>
    <ProductCardPdf :categoryName="CategoryName" :products="productStore.products" />
  </div>
</template>

<script setup>
import ProductCardPdf from 'src/components/ProductCardPdf.vue'
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from 'src/stores/product.js'
import { useCategoryStore } from 'src/stores/category.js'
import { useLangStore } from 'src/stores/lang.js'

const langStore = useLangStore()
const categoryStore = useCategoryStore()
const productStore = useProductStore()
const { locale } = useI18n()
const route = useRoute()
const selectedLang = ref(localStorage.getItem('language') || 'en')
// Query parametrlardan foydalanish
const CategoryId = Number(route.params.category)
console.log(CategoryId)
const pages = ref(0)
const selectedCategory = ref(null)
const router = useRouter()
const languageOptions = [
  { value: 'en', label: 'English', icon: 'icons/en.svg' },
  { value: 'uz', label: 'Uzbek', icon: 'icons/uz.svg' },
  { value: 'ru', label: 'Russian', icon: 'icons/ru.svg' },
]
onMounted(() => {
  if (categoryStore.categories.length === 0) {
    categoryStore.fetchCategory()
  }
  selectedCategory.value = Number(CategoryId)
  productStore.fetchProducts(CategoryId, 1) // categoryId, page, language
  pages.value = 1
})
const returnPage = () => {
  router.push('/')
}
const changeCategory = (id) => {
  selectedCategory.value = id
  pages.value = 1
  productStore.fetchProducts(id, 1) // categoryId, page, language
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, 300)
}
locale.value = langStore.selectedLang
const changeLanguage = (lang) => {
  locale.value = lang
  langStore.setLanguage(lang)
}
watch(
  () => selectedLang.value,
  () => {
    productStore.fetchProducts(selectedCategory.value, 1) // categoryId, page, language
    categoryStore.fetchCategory()
  },
)
</script>

<style lang="scss" scoped>
.category-select {
  .selected-item {
    font-size: 25px;
    .selected-category-name {
      margin: 0 auto;
    }
  }
}
.mobile_bar {
  a {
    text-decoration: none;
    color: #000;
  }
  // display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  padding: 15px;
  height: 80px;
  background-color: #fff;
  z-index: 2;
  box-shadow: 0px 2px 10px 2px rgba(211, 211, 211, 0.733);
  .category-name {
    width: 100%;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
  }
}
.lang-select {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  img {
    width: 20px;
    height: 20px;
  }
}
.category-select {
  // width: 100%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 3;
  img {
    width: 20px;
    height: 20px;
  }
}
.back-btn {
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 30px;
  background-color: transparent;
  border: 2px solid #46760a;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  padding: 4px 18px 4px 35px;
  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
    width: 20px;
    height: 20px;
    background-image: url('../arrow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}
@media screen and (max-width: 768px) {
  .category-select {
    width: auto;
    .selected-item {
      font-size: 25px;
    }
  }
  .mobile_bar {
    height: 120px;
  }
  .lang-select {
    top: 60px;
  }
  .back-btn {
    top: 70px;
  }
}
</style>
<style lang="scss">
@media screen and (max-width: 350px) {
  .category-select {
    .selected-item {
      font-size: 18px !important;
    }
  }
}
</style>
