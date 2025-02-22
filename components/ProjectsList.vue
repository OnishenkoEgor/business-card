<script setup lang="ts">
const {data} = useFetch('/api/projects');
</script>

<template>
  <div v-for="project in data?.list">
      <div>
        {{ project.name}}
      </div>
  </div>
</template>

<style scoped lang="scss">

</style>