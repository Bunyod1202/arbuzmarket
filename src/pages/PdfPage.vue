<template>
  <q-page>
    <div>
      <div class="hiro-section">
        <div class="banner" v-if="pages < 1" :style="{ backgroundImage: 'url( ' + banner + ')' }">
          <h1 class="banner_title">{{ $t('title') }}</h1>
          <p class="banner_description">
            {{ $t('description') }}
          </p>
          <div class="number-group">
            <div class="click-to-call">
              <img src="../../public/arrow.gif" alt="" />
            </div>
            <div class="number-group__item">
              <p class="number-group__item__title">{{ $t('contacts.address') }}</p>
              <a class="number-group__item__number" href="tel:+971505442344">+971505442344</a>
            </div>
            <div class="number-group__item">
              <p class="number-group__item__title">{{ $t('contacts.address1') }}</p>
              <a class="number-group__item__number" href="tel:+971525010022">+971525010022</a>
            </div>
            <div class="number-group__item">
              <p class="number-group__item__title">{{ $t('contacts.address2') }}</p>
              <a class="number-group__item__number" href="tel:+971551944000">+971551944000</a>
            </div>
          </div>
          <div class="social-media">
            <p class="social-media__text">{{ $t('biSubscription') }}</p>
            <a
              href="https://www.instagram.com/skazkamarket.uae"
              target="blank"
              ><svg
                width="141"
                height="141"
                viewBox="0 0 141 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="141" height="141" rx="70.5" fill="url(#paint0_radial_114_1071)" />
                <path
                  d="M70.5 41.6205C79.8434 41.6205 81.1175 41.6205 84.9398 41.6205C88.3374 41.6205 90.0361 42.4699 91.3102 42.8946C93.009 43.744 94.2831 44.1687 95.5572 45.4428C96.8313 46.7169 97.6807 47.991 98.1054 49.6898C98.5301 50.9639 98.9548 52.6627 99.3795 56.0602C99.3795 59.8825 99.3795 60.7319 99.3795 70.5C99.3795 80.2681 99.3795 81.1175 99.3795 84.9398C99.3795 88.3374 98.5301 90.0361 98.1054 91.3102C97.256 93.009 96.8313 94.2831 95.5572 95.5572C94.2831 96.8313 93.009 97.6807 91.3102 98.1054C90.0361 98.5301 88.3374 98.9548 84.9398 99.3795C81.1175 99.3795 80.2681 99.3795 70.5 99.3795C60.7319 99.3795 59.8825 99.3795 56.0602 99.3795C52.6627 99.3795 50.9639 98.5301 49.6898 98.1054C47.991 97.256 46.7169 96.8313 45.4428 95.5572C44.1687 94.2831 43.3193 93.009 42.8946 91.3102C42.4699 90.0361 42.0452 88.3374 41.6205 84.9398C41.6205 81.1175 41.6205 80.2681 41.6205 70.5C41.6205 60.7319 41.6205 59.8825 41.6205 56.0602C41.6205 52.6627 42.4699 50.9639 42.8946 49.6898C43.744 47.991 44.1687 46.7169 45.4428 45.4428C46.7169 44.1687 47.991 43.3193 49.6898 42.8946C50.9639 42.4699 52.6627 42.0452 56.0602 41.6205C59.8825 41.6205 61.1566 41.6205 70.5 41.6205ZM70.5 35.25C60.7319 35.25 59.8825 35.25 56.0602 35.25C52.238 35.25 49.6898 36.0994 47.5663 36.9488C45.4428 37.7982 43.3193 39.0723 41.1958 41.1958C39.0723 43.3193 38.2229 45.0181 36.9488 47.5663C36.0994 49.6898 35.6747 52.238 35.25 56.0602C35.25 59.8825 35.25 61.1566 35.25 70.5C35.25 80.2681 35.25 81.1175 35.25 84.9398C35.25 88.7621 36.0994 91.3102 36.9488 93.4337C37.7982 95.5572 39.0723 97.6807 41.1958 99.8042C43.3193 101.928 45.0181 102.777 47.5663 104.051C49.6898 104.901 52.238 105.325 56.0602 105.75C59.8825 105.75 61.1566 105.75 70.5 105.75C79.8434 105.75 81.1175 105.75 84.9398 105.75C88.7621 105.75 91.3102 104.901 93.4337 104.051C95.5572 103.202 97.6807 101.928 99.8042 99.8042C101.928 97.6807 102.777 95.9819 104.051 93.4337C104.901 91.3102 105.325 88.7621 105.75 84.9398C105.75 81.1175 105.75 79.8434 105.75 70.5C105.75 61.1566 105.75 59.8825 105.75 56.0602C105.75 52.238 104.901 49.6898 104.051 47.5663C103.202 45.4428 101.928 43.3193 99.8042 41.1958C97.6807 39.0723 95.9819 38.2229 93.4337 36.9488C91.3102 36.0994 88.7621 35.6747 84.9398 35.25C81.1175 35.25 80.2681 35.25 70.5 35.25Z"
                  fill="white"
                />
                <path
                  d="M70.5 52.238C60.3072 52.238 52.238 60.3072 52.238 70.5C52.238 80.6928 60.3072 88.7621 70.5 88.7621C80.6928 88.7621 88.7621 80.6928 88.7621 70.5C88.7621 60.3072 80.6928 52.238 70.5 52.238ZM70.5 82.3916C64.1295 82.3916 58.6084 77.2952 58.6084 70.5C58.6084 64.1295 63.7048 58.6084 70.5 58.6084C76.8705 58.6084 82.3916 63.7048 82.3916 70.5C82.3916 76.8705 76.8705 82.3916 70.5 82.3916Z"
                  fill="white"
                />
                <path
                  d="M89.1868 56.0602C91.5323 56.0602 93.4337 54.1588 93.4337 51.8133C93.4337 49.4677 91.5323 47.5663 89.1868 47.5663C86.8412 47.5663 84.9398 49.4677 84.9398 51.8133C84.9398 54.1588 86.8412 56.0602 89.1868 56.0602Z"
                  fill="white"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_114_1071"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(143.837 2.86407) scale(325.611)"
                  >
                    <stop stop-color="#F9ED32" />
                    <stop offset="0.36" stop-color="#EE2A7B" />
                    <stop offset="0.44" stop-color="#D22A8A" />
                    <stop offset="0.6" stop-color="#8B2AB2" />
                    <stop offset="0.83" stop-color="#1B2AF0" />
                    <stop offset="0.88" stop-color="#002AFF" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
            <a href="https://whatsapp.com/channel/0029VaryG06CBtxHO23Jlh1w" target="blank"
              ><svg
                width="141"
                height="141"
                viewBox="0 0 141 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="141" height="141" rx="70.5" fill="#48C95F" />
                <path
                  d="M98.4421 42.5199C91.478 35.5801 82.1927 31.7246 72.3915 31.7246C52.0152 31.7246 35.5079 48.1746 35.5079 68.4801C35.5079 74.9059 37.3134 81.3316 40.4085 86.7293L35.25 105.75L54.8524 100.609C60.2689 103.436 66.2012 104.979 72.3915 104.979C92.7677 104.979 109.275 88.5285 109.275 68.2231C109.017 58.7129 105.406 49.4598 98.4421 42.5199ZM90.1884 81.5887C89.4146 83.6449 85.8037 85.7012 83.9982 85.9582C82.4506 86.2152 80.3872 86.2152 78.3238 85.7012C77.0341 85.1871 75.2287 84.6731 73.1652 83.6449C63.8799 79.7895 57.9476 70.5363 57.4317 69.7652C56.9159 69.2512 53.5628 64.8816 53.5628 60.2551C53.5628 55.6285 55.8841 53.5723 56.6579 52.5441C57.4317 51.516 58.4634 51.516 59.2372 51.516C59.753 51.516 60.5268 51.516 61.0427 51.516C61.5585 51.516 62.3323 51.259 63.1061 53.0582C63.8799 54.8574 65.6854 59.484 65.9433 59.741C66.2012 60.2551 66.2012 60.7691 65.9433 61.2832C65.6854 61.7973 65.4274 62.3113 64.9116 62.8254C64.3957 63.3395 63.8799 64.1105 63.6219 64.3676C63.1061 64.8816 62.5902 65.3957 63.1061 66.1668C63.6219 67.1949 65.4274 70.0223 68.2646 72.5926C71.8756 75.677 74.7128 76.7051 75.7445 77.2191C76.7762 77.7332 77.2921 77.4762 77.8079 76.9621C78.3238 76.448 80.1293 74.3918 80.6451 73.3637C81.161 72.3356 81.9347 72.5926 82.7085 72.8496C83.4823 73.1066 88.125 75.4199 88.8988 75.934C89.9305 76.4481 90.4463 76.7051 90.7043 76.9621C90.9622 77.7332 90.9622 79.5324 90.1884 81.5887Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://t.me/restaurantSkazka" target="blank"
              ><svg
                width="141"
                height="141"
                viewBox="0 0 141 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="141" height="141" rx="70.5" fill="#27A6E5" />
                <path
                  d="M98.6996 44.4226L88.1055 99.7301C88.1055 99.7301 86.6232 103.565 82.5512 101.726L58.1077 82.3176L57.9944 82.2604C61.2961 79.1903 86.8993 55.3517 88.0183 54.2711C89.7506 52.5976 88.6752 51.6013 86.6639 52.8655L48.8448 77.7365L34.2543 72.6528C34.2543 72.6528 31.9582 71.807 31.7373 69.9679C31.5135 68.1258 34.3299 67.1295 34.3299 67.1295L93.8109 42.9658C93.8109 42.9658 98.6996 40.7415 98.6996 44.4226Z"
                  fill="#FEFEFE"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/people/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D1%81%D0%BA%D0%B8%D0%B5-%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B-%D0%B2-%D0%94%D1%83%D0%B1%D0%B0%D0%B5/100095100604895/?mibextid=wwXIfr&rdid=VROBdmnrbzo5vrDd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F199mZPotxC%2F%3Fmibextid%3DwwXIfr"
              target="blank"
              ><svg
                width="141"
                height="141"
                viewBox="0 0 141 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="141" height="141" rx="70.5" fill="#0B84EE" />
                <path
                  d="M76.3408 71.7862H89.4615L91.5215 58.3761H76.3381V51.0469C76.3381 45.4762 78.1473 40.5364 83.3268 40.5364H91.6496V28.8338C90.1873 28.6351 87.0946 28.2002 81.2507 28.2002C69.048 28.2002 61.8939 34.6837 61.8939 49.4549V58.3761H49.3496V71.7862H61.8939V108.644C64.3782 109.02 66.8946 109.275 69.4776 109.275C71.8125 109.275 74.0913 109.06 76.3408 108.754V71.7862Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <!-- <div class="banner-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" id="arrow">
              <path
                width="100"
                height="100"
                d="M13 0C5.826 0 0 5.826 0 13s5.826 13.002 13 13.002S26 20.174 26 13 20.174 0 13 0zm0 1c6.633 0 12 5.367 12 12s-5.367 12-12 12S1 19.633 1 13 6.367 1 13 1zm-.85 4a.5.5 0 0 0-.507.508v.002a.5.5 0 0 0 .507.492h2.047a.5.5 0 1 0 0-1.002H12.15zm0 2.002a.5.5 0 0 0-.507.508.5.5 0 0 0 .507.492h2.047a.5.5 0 1 0 0-1H12.15zm-.05 2.002a.5.5 0 0 0-.457.504v.002a.5.5 0 0 0 .507.492h2.047a.5.5 0 1 0 0-.998H12.15a.5.5 0 0 0-.05 0zm.054 1.994a.5.5 44.999 0 0-.5.5v5.51H9.998a.5.5 44.999 0 0-.498.49v.01a.5.5 44.999 0 0 .146.361l2.993 2.985a.5.5 44.999 0 0 .707 0l3.006-3a.5.5 44.999 0 0-.356-.854H14.7v-5.502a.5.5 44.999 0 0-.5-.5h-2.045zM12.652 12H13.7v5.498a.5.5 44.999 0 0 .492.5h.3a.5.5 44.999 0 0 .011 0h.285l-1.797 1.791-1.781-1.777h.289a.5.5 44.999 0 0 .012 0l.652-.016a.5.5 44.999 0 0 .49-.498V12z"
              ></path>
            </svg>
          </div> -->
        </div>
        <div class="products" :style="{ width: pages < 1 ? '' : '100%' }">
          <div class="" id="product-cards"></div>
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
                    <q-img width="20px" :src="props.opt.icon" :alt="props.opt.label" />
                  </q-item-section>
                  <q-item-section>{{ props.opt.label }}</q-item-section>
                </q-item>
              </template>
              <template v-slot:option="props">
                <q-item v-bind="props.itemProps" class="option-item">
                  <q-item-section avatar>
                    <q-img width="20px" :src="props.opt.icon" :alt="props.opt.label" />
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
              :options="categoryOptions"
              borderless
              dense
              emit-value
              map-options
              style="max-width: 500px"
            >
              <template v-slot:selected-item="props">
                <q-item v-bind="props.itemProps" class="selected-item">
                  <q-item-section avatar>
                    <q-img width="30px" :src="props.opt.icon" :alt="props.opt.label" />
                  </q-item-section>
                  <q-item-section
                    style="margin-left: 10px"
                    class="text-h5 text-nowrap text-weight-bold"
                  >
                    {{ props.opt.label }}
                  </q-item-section>
                </q-item>
              </template>
              <template v-slot:option="props">
                <q-item v-bind="props.itemProps" class="option-item">
                  <!-- <a href="#product-cards" class="category-option-item"> -->
                  <q-item-section avatar>
                    <q-img width="25px" :src="props.opt.icon" :alt="props.opt.label" />
                  </q-item-section>
                  <q-item-section style="margin-left: 10px">{{ props.opt.label }} </q-item-section>
                  <!-- </a> -->
                </q-item>
              </template>
            </q-select>

            <h5 class="text-h5 category-name text-weight-bold" v-else>{{ $t('categoryList') }}</h5>

            <button
              class="btn back-btn"
              v-if="pages > 0"
              @click="nextPage({ categoryId: null, nextPage: 0 })"
            >
              <a href="">
                {{ $t('back') }}
              </a>
            </button>
          </div>
          <keep-alive>
            <component :is="component" :nextPage="nextPage" :categorys="categoryStore.categories" />
          </keep-alive>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CategoryList from 'src/components/CategoryList.vue'
// import ProductCardPdf from 'src/components/ProductCardPdf.vue'
import { nextTick, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMeta } from 'quasar'
import { useCategoryStore } from 'src/stores/category'
import { useLangStore } from 'src/stores/lang.js'
const langStore = useLangStore()
const categoryStore = useCategoryStore()

const isMobile = () => window.innerWidth <= 1025
useMeta({
  title: 'Skazka Market',
  meta: {
    description: {
      name: 'description',
      content:
        'Skazka Market – доставляет лучшие продукты из солнечного Узбекистана прямо к вашему порогу в ОАЭ. Насладитесь ароматом свежих фруктов, овощей, мяса, сухофруктов, напитков и сладостей, а также редкими деликатесами, которые так сложно найти за пределами родины. Все это теперь доступно в несколько кликов. Закажите прямо сейчас и получите быструю и бесплатную доставку.',
    },
    title: { name: 'title', content: 'Skazka Market' },
    image: { name: 'image', content: 'https://productsfromuzb.uz/bannerRu.png' },
    url: { name: 'url', content: 'https://productsfromuzb.uz' },
    type: { name: 'type', content: 'website' },
  },
})
const { locale } = useI18n()
let component = ref(CategoryList)
const pages = ref(0)
const pagination = ref(1)
let stepper = true

//
const languageOptions = [
  { value: 'en', label: 'English', icon: 'icons/en.svg' },
  { value: 'uz', label: 'Uzbek', icon: 'icons/uz.svg' },
  { value: 'ru', label: 'Russian', icon: 'icons/ru.svg' },
]
const selectedLang = ref(langStore.selectedLang)
let banner = ref(
  selectedLang.value === 'en'
    ? '../bannerEn.webp'
    : selectedLang.value === 'ru'
      ? '../bannerRu.webp'
      : '../bannerUz.webp',
)
locale.value = selectedLang.value
const changeLanguage = (lang) => {
  locale.value = lang
  langStore.setLanguage(lang)
}
onMounted(async () => {
  if (isMobile()) {
    await nextTick()
    setTimeout(() => {
      window.scrollTo({
        top: 300,
        behavior: 'smooth',
      })
    }, 3000)
  }
  if (categoryStore.categories.length === 0) {
    categoryStore.fetchCategory()
  }
})
const nextPage = (page) => {
  switch (page.nextPage) {
    case 0:
      component.value = CategoryList
      pages.value = 0
      pagination.value = 1
      // ress = true
      stepper = true
      break
  }
}
watch(
  () => selectedLang.value,
  () => {
    if (stepper) {
      banner.value =
        locale.value === 'en'
          ? '../bannerEn.webp'
          : locale.value === 'ru'
            ? '../bannerRu.webp'
            : '../bannerUz.webp'
    }
    categoryStore.fetchCategory(selectedLang.value)
    stepper = true
  },
)
</script>
<style>
html {
  scroll-behavior: smooth;
}
.pagination {
  justify-content: center;
  margin: 7px 0;
}

.text-white {
  background-color: #6a983c;
}
@media screen and (max-width: 1024px) {
  body {
    overflow: auto;
  }
  .hiro-section {
    flex-direction: column;
  }
}
.q-item__section--avatar {
  min-width: 20px !important;
}
.q-item__section--side {
  max-width: 20px;
  margin-right: 10px;
}
.q-field--auto-height {
  height: auto !important;
}
.text-nowrap {
  white-space: nowrap;
}
.category-option-item {
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style lang="scss" scoped>
.banner-arrow {
  display: none;
}
.category-name {
  text-align: center;
  margin: 20px 0;
}
.btn-wrapper {
  padding: 10px 20px;
}
.products {
  position: relative;
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
.more-btn {
  cursor: pointer;
  width: 100%;
  background-color: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
  padding: 8px 18px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
}
.hiro-section {
  display: flex;
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
.banner {
  width: 550px;
  height: 100vh;
  background-color: #ffff00;
  position: relative;
  background-size: cover;
  background-position: top center;
  img {
    width: 100%;
  }
}
.products {
  width: 65%;
}
.number-group {
  margin-top: 35px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 3;
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
.number-group__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
  background-color: #fe0115;
  border-radius: 15px;
  padding: 3px 10px;
  text-shadow: 0px 0px 4px rgb(0, 0, 0);
  &__title {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;

    color: #fff;
  }
  &__number {
    margin: 0;
    margin-left: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    background-color: #eded3b;
    .number-group__item__number {
      text-shadow: 0px 0px 4px rgb(255, 255, 255);
    }
  }
}
.click-to-call {
  position: absolute;
  top: 0px;
  right: -35px;
  img {
    transform: rotate(-40deg);
    width: 70px;
    height: 70px;
  }
}
.social-media {
  position: absolute;
  z-index: 3;
  bottom: 20px;
  right: 20px;
  a {
    margin-right: 10px;
  }
  svg {
    width: 50px;
    height: 50px;
  }
}
.social-media__text {
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  color: #494848;
}
.banner_title {
  display: none;
}
.banner_description {
  display: none;
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
@media screen and (max-width: 3840px) {
  .banner {
    width: 45%;
  }
  .click-to-call {
    position: absolute;
    top: 0px;
    right: -105px;
    img {
      transform: rotate(-40deg);
      width: 200px;
      height: 200px;
    }
  }
  .number-group__item {
    padding: 30px 50px;
    border-radius: 50px;
    &__title {
      font-size: 60px;
    }
    &__number {
      font-size: 60px;
    }
  }
  .social-media {
    display: block;
    .social-media__text {
      font-size: 48px;
    }
    a {
      margin-right: 5px;
    }
    svg {
      width: 150px;
      height: 150px;
    }
  }
}
@media screen and (max-width: 3000px) {
  .banner {
    width: 45%;
  }
  .click-to-call {
    position: absolute;
    top: 0px;
    right: -39px;
    img {
      transform: rotate(-40deg);
      width: 70px;
      height: 70px;
    }
  }
  .number-group__item {
    padding: 3px 10px;
    border-radius: 50px;
    &__title {
      font-size: 20px;
    }
    &__number {
      font-size: 20px;
    }
  }
  .social-media {
    display: block;
    .social-media__text {
      font-size: 20px;
    }
    a {
      margin-right: 5px;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }

  .social-media {
    display: block;
    a {
      margin-right: 5px;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }
}
@media screen and (max-width: 1920px) {
  .click-to-call {
    position: absolute;
    top: 0px;
    right: -39px;
    img {
      transform: rotate(-40deg);
      width: 70px;
      height: 70px;
    }
  }
  .number-group__item {
    padding: 3px 10px;
    border-radius: 50px;
    &__title {
      font-size: 20px;
    }
    &__number {
      font-size: 20px;
    }
  }
  .social-media {
    display: block;
    .social-media__text {
      font-size: 20px;
    }
    a {
      margin-right: 5px;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }
}

@media screen and (max-width: 1394px) {
  .banner {
    width: 550px;
  }

  .social-media {
    display: block;
    a {
      margin-right: 5px;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }
}
@media screen and (max-width: 1044px) {
  .social-media {
    a {
      display: block;
    }
  }
}
@media screen and (max-width: 1024px) {
  .number-group__item {
    &__title {
      font-size: 25px;
    }
    &__number {
      font-size: 25px;
    }
  }
  .social-media {
    a {
      display: inline;
    }
    svg {
      width: 70px;
      height: 70px;
    }
  }
  .banner {
    width: 100%;
  }
  .products {
    width: 100%;
  }
  .hiro-section {
    flex-direction: column;
  }
  body {
    overflow-y: auto;
  }
}
@media screen and (max-width: 768px) {
  .mobile_bar {
    height: 120px;
  }
  .category-name {
    display: block;
    text-align: center;
    margin: 20px 0 40px 0px;
  }
  .banner {
    height: 600px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .lang-select {
    top: 60px;
  }
  .back-btn {
    top: 70px;
  }
  .number-group {
    bottom: 130px;
    left: 50%;
    transform: translateX(-50%);
  }
  .social-media {
    width: 300px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 480px) and (max-height: 860px) {
  .banner {
    height: 700px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  // .banner-arrow {
  //   z-index: 5;
  //   display: block;
  //   position: fixed;
  //   right: 10px;
  //   top: 60%;
  // }
}
@media (max-width: 360px) and (max-height: 720px) {
  .banner {
    height: 630px;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
@media screen and (max-height: 480px) {
  .banner {
    height: 1000px;
  }
}
@media (max-width: 400px) and (max-height: 700px) {
  .category-name {
    font-size: 23px !important;
  }
}
</style>
