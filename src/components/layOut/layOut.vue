<template>

  <div class="common-layout">
    <el-container>
      <el-header class="common-header">
        <img class="logo" src="../../assets/logo.png" alt="logo">
        <h1 class="title">后台管理系统</h1>
        <el-button type="primary" @click="loginOut">退出</el-button>
      </el-header>

      <el-container>
        <el-aside class="common-aside" width="200px">

          <h5 class="mb-2">Default colors</h5>
          <el-menu class="el-menu-vertical-demo" default-active="/users" router="true" @open="handleOpen"
            @close="handleClose">

            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Tickets />
                </el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item index="/users">
                账号列表
              </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <Avatar />
                </el-icon>
                <span>角色管理</span>
              </template>
              <el-menu-item index="/roles">
                角色列表
              </el-menu-item>
            </el-sub-menu>

            <el-menu-item index="/3">
              <el-icon>
                <ChatLineRound />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>

            <el-menu-item index="/4">
              <el-icon>
                <setting />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>

          </el-menu>
        </el-aside>

        <el-main>
          layOut 内容
          {{ count }}
          {{ numState }}
          <router-view></router-view>
          <!-- <br>
          FP: {{ FP }}ms
          <br>
          FCP: {{ FCP }}ms
          <br>
          DOM Ready: {{ domReady }}ms
          <br>
          DNS Time: {{ dnsTime }}ms -->
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

const loginOut = () => {
  store.commit('user/setUser', {})
  localStorage.removeItem('loginData')
  router.push('/login')
}

/* // 在 computed 函数中访问 state、getters
let count = computed(() => store.state.number.num)
let numState = computed(() => store.getters['number/countStatus'])

const testVux = () => {
  // store.commit('number/increment', 1)
  store.dispatch('number/countPromise', count.value).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
  console.log('state', count.value);
  console.log('getters', numState.value);
} */



</script>

<style scoped>
/* element-ui 组件自带一个与组件名相同的类名，所以可以直接 .组件名 */
.el-container {
  height: 100vh;
  overflow: hidden;
}

.common-header {
  background-color: rgb(11, 42, 81);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 50px;
}

.title {
  color: #fff;
}

.common-aside {
  background-color: rgb(131, 187, 255);
}
</style>