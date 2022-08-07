<template>
  <div>
    users 账号列表
    <!-- 面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="page_content">

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