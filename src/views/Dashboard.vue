<template>
  <div class="container">
    <h1>Dashboard</h1>
    <div class="tabs">
      <ul>
        <li :class="{ 'is-active' : activeCategory === 'Newest' }"><a @click="setCategory('Newest')">Newest</a></li>
        <li v-for="category in categories" :class="{ 'is-active' : activeCategory === category.title }">
          <a @click="setCategory(category.title)">{{ category.title }}</a>
        </li>
      </ul>
    </div>

    <TabMovie
      category="Newest"
      v-if="activeCategory === 'Newest'"
      :categories="categories">
    </TabMovie>

    <TabMovie
      v-for="category in categories"
      :key="category.id"
      :category="category.id"
      :categoryTitle="category.title"
      @updateCategory="setCategory"
      v-if="activeCategory === category.title">
    </TabMovie>
  </div>
</template>

<script>
import { db } from '../main.js'
import TabMovie from '../components/TabMovie.vue'

export default {
  name: 'Dashboard',
  components: { TabMovie },
  data() {
    return {
      categories: [],
      activeCategory: 'Newest'
    }
  },
  firestore() {
    return {
      categories: db.collection('categories')
    }
  },
  methods: {
    setCategory(title) {
      this.activeCategory = title
    }
  }
}
</script>

<style lang="css">
</style>
