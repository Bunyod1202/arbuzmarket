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
// Move this BEFORE the watch effect

// Then have your watch effect after it

// const generatePDF = async () => {
//   const element = contentToPrint.value // Get the element reference

//   try {
//     // Set up the PDF
//     const pdf = new jsPDF('p', 'mm', 'a4') // A4 paper size
//     const imgWidth = 190 // A4 page width (190mm is width after margins)
//     const pageHeight = 277 // Height of the A4 page (excluding margins)
//     const scale = 2 // To increase the resolution of images (optional)

//     // Render the entire webpage using html2canvas
//     const canvas = await html2canvas(element, {
//       scale: scale,
//       useCORS: true, // To handle external images
//     })

//     const imgData = canvas.toDataURL('image/png') // Convert canvas to image data
//     const imgHeight = (canvas.height * imgWidth) / canvas.width // Maintain aspect ratio

//     // Calculate how many pages are needed based on canvas height
//     let remainingHeight = canvas.height
//     let currentY = 10 // Top margin

//     // First page: add the first part of the image
//     pdf.addImage(imgData, 'PNG', 10, currentY, imgWidth, imgHeight)

//     remainingHeight -= pageHeight // Decrease the remaining height after adding the first page

//     // Add pages for the remaining content
//     while (remainingHeight > 0) {
//       pdf.addPage() // Add a new page for the remaining content
//       const startY = imgHeight - remainingHeight // Y-position for the current slice of content
//       const nextImgHeight = remainingHeight < pageHeight ? remainingHeight : pageHeight // Height for current slice
//       const chunk = document.createElement('canvas')
//       chunk.width = canvas.width
//       chunk.height = nextImgHeight

//       const ctx = chunk.getContext('2d')
//       ctx.drawImage(
//         canvas,
//         0,
//         startY,
//         canvas.width,
//         nextImgHeight,
//         0,
//         0,
//         chunk.width,
//         nextImgHeight,
//       )

//       const nextImgData = chunk.toDataURL('image/png') // Get chunk as image
//       pdf.addImage(nextImgData, 'PNG', 10, currentY, imgWidth, nextImgHeight) // Add chunk to the PDF

//       remainingHeight -= pageHeight // Reduce remaining height
//       currentY = 10 // Reset the Y-position after each page (always starts at the top)
//     }

//     // Trigger download
//     pdf.save('website.pdf')
//     alert('PDF generated successfully!')
//   } catch (error) {
//     console.error('Error generating PDF:', error)
//   }
// }
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
