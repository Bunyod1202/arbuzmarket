<template>
  <div class="products-wrapper">
    <!-- <div class="mobile_bar"> -->
    <!-- <button class="btn back-btn" @click="nextPage({ categoryId: null, nextPage: 0 })">
        {{ $t('back') }}
      </button> -->
    <!-- <h4 class="text-h5 product-name text-weight-bold">
        {{ props.products[0]?.category?.name || props.categoryName }}
      </h4> -->
    <!-- </div> -->
    <div
      class="product-cards"
      v-if="props.products.length > 0"
      @contextmenu.prevent
      @dragstart.prevent
    >
      <div class="product-card" v-for="item in props.products" :key="item.id">
        <div class="product-card__details">
          <q-skeleton v-if="!item.variations[0].files[0]?.url" height="150px" square />
          <q-img
            :src="item.variations[0].files[0]?.url"
            spinner-color="primary"
            :alt="item.name"
            class="product-card__image"
          />

          <div class="product-card__name">
            {{ item.name }}
            <q-tooltip
              anchor="top middle"
              self="bottom middle"
              class="tooltip top bg-lime-11 text-grey-10 text-body2 text-caption"
              :offset="[10, 10]"
            >
              {{ item.name }}
            </q-tooltip>
          </div>
        </div>

        <div class="product-card__price">
          <span class="product-card__price__normal">{{ getMinimumPrice(item) }} AED</span>
        </div>
      </div>
    </div>
    <div class="" v-else>
      <div class="no-items">
        <img src="public/no-items.png" alt="" />
        <h2 class="text-h5 category-name text-weight-bold">{{ $t('products_not_found') }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  nextPage: {
    type: Function,
    required: true,
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

.no-items {
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tooltip {
  border: 1px solid #000;
}
.product-cards {
  padding: 20px;
  width: 100%;
  height: 85vh;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: start !important;

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

.product-card {
  text-decoration: none;
  height: 290px;
  width: 170px;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
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
  font-size: 16px;
  font-weight: bold;

  /* background: #004d00; */
  color: #000;
  padding: 4px 18px;
  border-radius: 12px;
  background-color: transparent;
  // background-color: #6a983c;
  // border: 2px solid #46760a;
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
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  max-height: calc(1.5em * 3);
}

@media screen and (max-width: 1024px) {
  .product-cards {
    height: auto !important;
  }
}
@media screen and (max-width: 768px) {
  .product-cards {
    gap: 10px;

    height: 70vh;
  }
}
@media screen and (max-width: 500px) {
  .product-card {
    text-decoration: none;
    height: 200px;
    width: 115px;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 6px;
    text-align: center;
    background-color: #fff;

    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* overflow: hidden; */
  }
  .product-card__name {
    text-align: start;
    font-weight: 600;
    font-size: 13.8906px;
    line-height: 20px;
    color: #1a202c;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    max-height: calc(1.5em * 3);
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
    padding: 4px;
  }
}
</style>
