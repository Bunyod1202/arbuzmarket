<template>
  <div class="">
    <a class="product-card" target="blank" :href="productLink">
      <div class="product-card__details">
        <img :src="imageSrc" :alt="productName" class="product-card__image" />
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

<style scoped>
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
  object-fit: contain;
  object-position: 50% 50%;
}

.product-card__price {
  position: relative;
  font-size: 18px;
  font-weight: bold;

  /* background: #004d00; */
  color: #000000;
  padding: 4px 18px;
  border-radius: 4px;
  border: 4px solid #004d00;
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
