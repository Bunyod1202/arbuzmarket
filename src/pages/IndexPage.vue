<template>
  <q-page>
    <div ref="contentToPrint">
      <!-- <button @click="generatePDF()">Download PDF</button> -->
      <div class="container">
        <div class="banner">
          <img class="banner_img" src="/banner.png" alt="" />
          <img class="banner_mobile_img" src="/mobileBanner.png" alt="" />
          <div class="banner-content">
            <h1 class="banner_title">Свежие продукты из солнечного Узбекистана</h1>
            <p class="banner_description">
              <svg
                width="40"
                height="40"
                viewBox="0 0 118 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="118" height="118" fill="url(#pattern0_114_1065)" />
                <defs>
                  <pattern
                    id="pattern0_114_1065"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#image0_114_1065" transform="scale(0.015625)" />
                  </pattern>
                  <image
                    id="image0_114_1065"
                    width="64"
                    height="64"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              Бесплатная доставка 24 часа по всему Дубаю,Шарже и Аджмана.
            </p>
            <div class="number-group">
              <div class="number-group__item">
                <p class="number-group__item__title">Доставка:</p>
                <a class="number-group__item__number" href="tel:+971505442344">+971505442344</a>
              </div>
              <div class="number-group__item">
                <p class="number-group__item__title">Аджман:</p>
                <a class="number-group__item__number" href="tel:+971525010022">+971525010022</a>
              </div>
              <div class="number-group__item">
                <p class="number-group__item__title">Жлт:</p>
                <a class="number-group__item__number" href="tel:+971551944000">+971551944000</a>
              </div>
            </div>
            <div class="social-media">
              <a
                href="https://www.instagram.com/products_fromuzb/profilecard/?igsh=MW9ueDM2dTd6Z2pyYw=="
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
              <a href="https://wa.me/message/NVL7PJ7D4O4FE1" target="blank"
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
              <a href="https://t.me/Kamoliddin3355" target="blank"
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
          </div>
        </div>
        <q-card class="product-tab">
          <q-btn-dropdown class="glossy" color="primary" label="Категории">
            <q-list>
              <q-item
                v-for="category in categorys"
                :key="category.id"
                clickable
                @click="tab = '' + category.id"
              >
                <q-item-section avatar>
                  <q-img
                    :src="category.image.url"
                    spinner-color="primary"
                    style="height: 40px; width: 40px"
                    :alt="category.name"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ category.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-separator />

          <q-tab-panels v-model="tab" class="product-tab" animated>
            <q-tab-panel v-for="category in categorys" :key="category.id" :name="'' + category.id">
              <div v-if="products.length > 0">
                <div class="text-h6 category-name text-weight-bold">{{ category.name }}</div>
                <div class="cards">
                  <ProductCard
                    v-for="item in products"
                    :key="item.id"
                    :imageSrc="item.variations[0].files[0]?.url"
                    :price="getMinimumPrice(item)"
                    :productName="item.name"
                  />
                </div>
              </div>
              <div v-else class="text-h6">
                <h5 class="text-h5 category-name text-weight-bold">
                  {{ category.name }}
                </h5>
                <div class="no-items">
                  <img src="public/no-items.png" alt="" />
                  <h2 class="text-h5 category-name text-weight-bold">
                    Попробуйте изменить параметры
                  </h2>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import axios from 'axios'
import ProductCard from 'src/components/ProductCard.vue'
import { onMounted, ref, watch } from 'vue'
const tab = ref('135')
let products = ref([])
let categorys = ref([])
//
const fetchProducts = async function (tab) {
  console.log(tab)
  try {
    const response = await axios.post('https://arbuzmarket.com/api/v1/Products/filters', {
      page: 1,
      size: 1000,
      categoryId: '' + tab,
      tab: null,
    })
    products.value = response.data.item
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
const fetchCategory = async function () {
  try {
    const response = await axios.get('https://arbuzmarket.com/api/v1/Categories')
    categorys.value = response.data.item
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

onMounted(() => {
  fetchCategory()
  fetchProducts(tab.value)
})

watch(
  () => tab.value,
  () => {
    fetchProducts(tab.value)
    console.log(tab.value)
  },
)
function splitArrayIntoChunks(products) {
  const result = []
  const category = [135, 139, 143, 142, 144, 141, 140]
  for (let i = 0; i < category.length; ++i) {
    const res = products?.filter((item) => item.categoryId === category[i])
    if (res.length > 0) {
      result.push({
        arr: res,
        category: res[0].category,
      })
    } else {
      result.push({
        arr: [],
        category: null,
      })
    }
  }

  return result
}
const chunkedArray = ref([])
if (products.value?.length > 0) {
  chunkedArray.value = splitArrayIntoChunks(products.value, chunkSize)
}

const chunkSize = 12

const contentToPrint = ref(null)
const getMinimumPrice = (item) => {
  const prices = item.variations[0].prices
    .map((price) => price.value)
    .filter((value) => value !== undefined)
  const res = prices.sort(function (a, b) {
    return a - b
  })
  return res[1] ? res[1] : res[2]
}

let intervalID = setInterval(() => {
  if (products.value?.length > 0) {
    console.log(products.value)

    chunkedArray.value = splitArrayIntoChunks(products.value, chunkSize)
    clearInterval(intervalID)
  }
}, 1000)
</script>
<style lang="scss">
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.q-separator--horizontal {
  display: none !important;
}
.product-tab {
  box-shadow: 0 0 0 0 transparent !important;
  background-color: #fdfdfd !important;
}
.glossy {
  margin-left: 50px;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.banner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
}
.category-name {
  text-align: center;
}
.banner_img {
  width: 100%;
  border-radius: 25px;
}
.banner_mobile_img {
  display: none;
}
.text-h5 {
  text-align: center;
  margin: 0;
}
.q-tabs--not-scrollable .q-tabs__arrow,
body.mobile .q-tabs--scrollable.q-tabs--mobile-without-arrows .q-tabs__arrow {
  display: inline-block !important;
}
.q-tabs--not-scrollable .q-tabs__content,
body.mobile .q-tabs--scrollable.q-tabs--mobile-without-arrows .q-tabs__content {
  padding: 0 16px;
}
body {
  background-color: #fdfdfd;
}
</style>
<style lang="scss" scoped>
.banner {
  position: relative;
}
.no-items {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.banner-content {
  padding: 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}
.banner_title {
  width: 70%;
  font-weight: 700;
  font-size: 48px;
  line-height: 50px;
  color: #bfd515;
  margin: 0;
}
.banner_description {
  margin-top: 50px;
  width: 45%;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 35px;
  color: #74a903;
}
.number-group {
  margin-top: 35px;
}
.number-group__item {
  display: flex;
  align-items: center;
  margin-top: 2px;
  &__title {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #74a903;
  }
  &__number {
    margin: 0;
    margin-left: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #74a903;
    text-decoration: none;
  }
}
.social-media {
  position: absolute;
  bottom: 10px;
  right: 20px;
  z-index: 3;
  a {
    margin-right: 10px;
  }
  svg {
    width: 50px;
    height: 50px;
  }
}
.product-list {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.cards {
  width: 100%;
  margin-bottom: 1005px;
  // height: 3508px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
}
@media screen and (min-width: 20em) {
  .cards {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
  .banner_img {
    display: none;
  }
  .banner_mobile_img {
    height: 260px;
    width: 100%;
    display: block;
  }
  .banner-content {
    padding: 20px;
  }
  .banner_description {
    margin-bottom: 7px;
    margin-top: 0px;
    width: 58%;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 20px;
    color: #74a903;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .banner_title {
    margin-top: 0px;
    font-size: 28px;
    line-height: 25px;
  }
  .number-group {
    margin-top: 0px;
  }
  .number-group__item {
    &__title {
      font-size: 16px;
      line-height: 18px;
    }
    &__number {
      font-size: 16px;
      line-height: 18px;
    }
  }
  .social-media {
    a {
      margin-right: 5px;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
}
@media screen and (min-width: 35em) {
  .cards {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
  .number-group__item {
    &__title {
      font-size: 12px;
    }
    &__number {
      font-size: 12px;
    }
  }
  .social-media {
    a {
      margin-right: 5px;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
}
@media screen and (min-width: 40em) {
  .cards {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
}
@media screen and (min-width: 60em) {
  .cards {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
  }
}
@media screen and (min-width: 70em) {
  .cards {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }
  .banner {
    width: 90%;
    margin: 10px auto;
  }
  .banner-content {
    padding: 30px;
  }
  .banner_description {
    margin-top: 50px;
    width: 45%;
    font-size: 32px;
    line-height: 35px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .banner_title {
    width: 70%;
    font-size: 48px;
    line-height: 50px;
    margin: 0;
  }
  .number-group {
    margin-top: 35px;
  }
  .number-group__item {
    &__title {
      font-size: 18px;
      line-height: 30px;
    }
    &__number {
      font-size: 18px;
      line-height: 30px;
    }
  }
  .social-media {
    a {
      margin-right: 10px;
    }
    svg {
      width: 50px;
      height: 50px;
    }
  }
}
@media screen and (min-width: 85em) {
  .banner {
    width: 90%;
    margin: 10px auto;
  }
  .cards {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(6, minmax(0px, 1fr));
  }
  .banner-content {
    padding: 30px;
  }
  .banner_description {
    margin-top: 50px;
    width: 45%;
    font-size: 32px;
    line-height: 35px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .banner_title {
    width: 70%;
    font-size: 48px;
    line-height: 50px;
    margin: 0;
  }
  .number-group {
    margin-top: 35px;
  }
  .number-group__item {
    &__title {
      font-size: 18px;
      line-height: 30px;
    }
    &__number {
      font-size: 18px;
      line-height: 30px;
    }
  }
  .social-media {
    a {
      margin-right: 10px;
    }
    svg {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
