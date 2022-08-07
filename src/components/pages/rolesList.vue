<template>
  <div>
    roles 角色列表
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.group("window.performance");
  console.log(window.performance.getEntries());
  let [fp] = window.performance.getEntriesByName('first-paint')
  console.log('fp', fp);
  let [fcp] = window.performance.getEntriesByName('first-contentful-paint')
  console.log('fcp', fcp);
  let [navigation] = window.performance.getEntriesByType('navigation')
  let domReady = navigation.domContentLoadedEventEnd - navigation.fetchStart
  let dnsTime = navigation.domainLookupEnd - navigation.domainLookupStart
  console.log(navigation);
  console.log('domReady', domReady);
  console.log('dnsTime', dnsTime);
  console.groupEnd();
})
</script>

<style lang="scss" scoped>
</style>