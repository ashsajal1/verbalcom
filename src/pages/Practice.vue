<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.query.id as string
</script>

<template>
  <h1>Practice page:</h1>
  <p>The ID passed from the previous page is: {{ id }}</p>
</template>