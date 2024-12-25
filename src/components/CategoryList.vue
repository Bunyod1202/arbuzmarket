<template>
  <div class="category">
    <h5 class="text-h5 category-name text-weight-bold">Категории</h5>
    <div class="category-list">
      <div
        class="category-list__item"
        v-for="category in props.categorys"
        :key="category.id"
        @click="nextPage({ categoryId: category.id, categoryName: category.name, nextPage: 1 })"
      >
        <q-skeleton v-if="!category.image.url" class="product-card__image" square />
        <q-img
          :src="category.image.url"
          spinner-color="primary"
          :alt="category.name"
          class="product-card__image"
        />
        <h5>{{ category.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  nextPage: {
    type: Function, // Specify the prop type
    required: true, // Ensure the function is passed
  },
  categorys: {
    type: Array, // Specify the prop type
    required: true, // Ensure the array is passed
  },
})
console.log('Received props:', props)
</script>
<style>
body {
  overflow: hidden;
}

@media (max-width: 85em) {
  q-img__image {
    height: auto !important;
  }
}
</style>

<style lang="scss" scoped>
.category-name {
  text-align: center;
  margin: 20px 0;
}
.product-card__image {
  height: auto !important;
  border-radius: 30px;
}
.category-list {
  padding: 20px;
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
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
.category-list__item {
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease-in-out;
  max-width: 680px;
  display: flex;
  padding: 20px;
  border-radius: 50px;
  background-color: #f3f3f3;
  border: 2px solid #ddd;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  img {
    width: 100%;
    border-radius: 30px;
    object-fit: contain;
    object-position: 50% 50%;
  }
  h5 {
    text-align: center;
    font-size: 20px;
    margin: 0;
    display: block;
    margin-bottom: 10px;
    color: #333333;
    line-height: 1.4;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    font-weight: 600;
  }
  &:hover {
    border: 2px solid #46760a;
    transition: all 0.3s ease-in-out;
    background-color: #6a983c;
    h5 {
      color: #fff;
      transition: all 0.3s ease-in-out;
    }
  }
}
@media (max-width: 85em) {
  q-img__image {
    height: auto !important;
  }
  .category-list {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
}
@media (max-width: 70em) {
  .category-list {
    margin-bottom: 24px;
    gap: 24px 22px;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
  .category-list__item {
    max-width: 480px;
  }
}
</style>
