<template>
  <div class="products-wrapper">
    <button class="btn back-btn" @click="nextPage({ categoryId: null, nextPage: 0 })">назад</button>
    <h4 class="text-h5 product-name text-weight-bold">{{ props.categoryName }}</h4>
    <div class="product-cards row justify-center q-gutter-sm">
      <div class="product-card" v-for="item in props.products" :key="item.id">
        <div class="product-card__details">
          <q-skeleton v-if="!item.variations[0].files[0]?.url" height="150px" square />
          <q-img
            :src="item.variations[0].files[0]?.url"
            spinner-color="primary"
            :alt="item.name"
            class="product-card__image"
          />

          <div class="product-card__name">{{ item.name }}</div>
        </div>

        <div class="product-card__price">
          <span class="product-card__price__normal">{{ getMinimumPrice(item) }} AED</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  products: {
    type: Array, // Specify the prop type
    required: true, // Ensure the function is passed
  },
  categoryName: {
    type: String, // Specify the prop type
    required: true, // Ensure the function is passed
  },
  nextPage: {
    type: Function, // Specify the prop type
    required: true, // Ensure the function is passed
  },
})
const getMinimumPrice = (item) => {
  const prices = item.variations[0].prices
    .map((price) => price.value)
    .filter((value) => value !== undefined)
  const res = prices.sort(function (a, b) {
    return a - b
  })
  return res[1] ? res[1] : res[2]
}
</script>
<style>
.q-img__image {
  object-fit: contain !important;
}
</style>
<style lang="scss" scoped>
.products-wrapper {
  position: relative;
  width: 100%;
}
.product-name {
  text-align: center;
  margin: 20px 0;
}
.product-cards {
  padding: 20px;
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, minmax(0px, 1fr));

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}

.back-btn {
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 0px;
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
.product-card {
  text-decoration: none;
  height: 100%;
  width: 170px;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
  margin: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* overflow: hidden; */
}

.product-card__image {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  object-fit: contain;
  object-position: 50% 50%;
}

.product-card__price {
  position: relative;
  font-size: 18px;
  font-weight: bold;

  /* background: #004d00; */
  color: #ffffff;
  padding: 4px 18px;
  border-radius: 12px;
  background-color: #6a983c;
  border: 2px solid #46760a;
  gap: 11px;
  grid-template-columns: 1fr 0.2fr;
}
.product-card__price__promosional {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, -120%);
  color: red;
  text-decoration: line-through;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.product-card__name {
  text-align: start;
  font-weight: 600;
  font-size: 13.8906px;
  line-height: 20px;
  color: #1a202c;
}
</style>
