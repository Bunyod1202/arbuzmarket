<template>
  <div class="">
    <a class="product-card" target="blank" :href="productLink">
      <div class="product-card__details">
        <q-skeleton v-if="!imageSrc" height="150px" square />
        <q-img
          :src="imageSrc"
          spinner-color="green-9"
          :alt="productName"
          ratio="16/9"
          class="product-card__image"
        />

        <div class="product-card__name">{{ productName }}</div>
      </div>

      <div class="product-card__price">
        <span class="product-card__price__normal">{{ price }} AED</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    imageSrc: String,
    price: Number,
    productName: String,
    promosionalPrice: Number,
    productLink: String,
  },
}
</script>
<style>
.q-img__image {
  object-fit: contain !important;
}
</style>
<style lang="scss" scoped>
img {
  margin: 0;
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
  object-fit: contain !important;
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

.product-card__name {
  text-align: start;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #1a202c;
}

@media screen and (min-width: 20em) {
  .product-card {
    text-decoration: none;
    height: 100%;
    width: 130px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 14px;
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
    height: 80px;
    margin-bottom: 10px;
    object-fit: contain;
    object-position: 50% 50%;
  }
  .product-card__price {
    font-size: 14px;
  }
}

@media screen and (min-width: 60em) {
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
    font-size: 18px;
  }
}
</style>
