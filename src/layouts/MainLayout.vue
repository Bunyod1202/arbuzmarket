<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useCategoryStore } from 'src/stores/category.js'
const categoryStore = useCategoryStore()
categoryStore.fetchCategory()
</script>
