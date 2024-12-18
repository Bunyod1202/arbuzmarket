<template>
  <q-page>
    <NewYear />
    <div ref="contentToPrint">
      <!-- <button @click="generatePDF()">Download PDF</button> -->
      <div class="banner">
        <img class="banner_img" src="/banner.png" alt="" />
      </div>
      <div class="product-list">
        <div class="product-cards" v-for="item in chunkedArray" :key="item">
          <h5 class="text-h5 category-name text-weight-bold" v-if="item?.category">
            {{ item.category.name }}
          </h5>
          <div class="cards">
            <ProductCard
              v-for="item in item.arr"
              :key="item.id"
              :imageSrc="item.variations[0].files[0]?.url"
              :price="getMinimumPrice(item)"
              :productName="item.name"
              :productLink="'https://arbuzmarket.com/product/' + item.id"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import axios from 'axios'
import NewYear from 'src/components/NewYear.vue'
import ProductCard from 'src/components/ProductCard.vue'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
import { onMounted, ref } from 'vue'

let products = []
//
const fetchProducts = async function () {
  try {
    const response = await axios.post('https://arbuzmarket.com/api/v1/Products/filters', {
      page: 1,
      size: 1000,
      categoryId: null,
      tab: null,
    })
    products = response.data.item
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
onMounted(() => {
  fetchProducts()
})
function splitArrayIntoChunks(products) {
  const result = []
  const category = [135, 139, 143, 142, 144, 141, 140]
  for (let i = 0; i < category.length; ++i) {
    const res = products.filter((item) => item.categoryId === category[i])
    result.push({
      arr: res,
      category: res[0].category,
    })
  }

  return result
}
const chunkedArray = ref([])
if (products?.length > 0) {
  chunkedArray.value = splitArrayIntoChunks(products, chunkSize)
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
  if (products?.length > 0) {
    chunkedArray.value = splitArrayIntoChunks(products, chunkSize)
    clearInterval(intervalID)
  }
}, 1000)
</script>
<style lang="scss">
.banner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
}
.banner_img {
  width: 100%;
}
.text-h5 {
  text-align: center;
  margin: 0;
}
body {
  background-color: #f2f2f2;
}
</style>
<style lang="scss" scoped>
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
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
}
@media screen and (min-width: 35em) {
  .cards {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
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
}
@media screen and (min-width: 85em) {
  .banner {
    width: 1000px;
    margin: 10px auto;
  }
  .cards {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(6, minmax(0px, 1fr));
  }
}
</style>
