<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{ obj }}</div>
    <button @click="handleClick">按钮</button>
    <div>{{ n }}</div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import { reactive } from 'vue'

let obj = reactive({
  name: 'nb',
  age: 18
})

// 具有响应性：
let n = obj;
n.age = 100

const handleClick = () => {
  console.log('ok');
}

</script>
