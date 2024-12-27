<script lang="ts" setup>
const { data: page } = await useAsyncData(() =>
  queryCollection('test').first()
);
</script>

<template>
  <div v-if="page">
    <h2>{{ page?.title }}</h2>
    <p>{{ page?.description }}</p>
  </div>
  <div v-else>
    <p>If you see this, something is wrong..</p>
  </div>
</template>
