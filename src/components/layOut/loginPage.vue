<template>
  <div class="sign">
    <div class="sign-container">

      <el-container>
        <el-header height="100px">
          <div class="tittle">后台管理系统</div>
        </el-header>

        <el-main>
          <el-form :model="loginData" label-width="60px">

            <el-row justify="center">
              <el-col :span="20">
                <el-form-item label="用户名">
                  <el-input v-model="loginData.username" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row justify="center">
              <el-col :span="20">
                <el-form-item label="密码">
                  <el-input show-password v-model="loginData.password" />
                </el-form-item>
              </el-col>
            </el-row>

          </el-form>
        </el-main>

        <el-footer height="100px">
          <el-button type="primary" @click="onSubmit" size="large" style="width:40%;">登录</el-button>
        </el-footer>

      </el-container>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { loginApi } from "@/utils/api.js";
const store = useStore()
const router = useRouter()
// const route = useRoute()

const loginData = reactive({
  username: "",
  password: ""
},
)

// 登录按钮
const onSubmit = () => {
  // 请求后台接口
  // 默认用户：admin/123456
  loginApi(loginData).then(res => {
    console.log('登录的返回值', res);
    if (res.data) {
      store.commit('user/setUser', loginData)
      localStorage.setItem('loginData', JSON.stringify(loginData))
      router.push('/')
    }
  })
}
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

  // console.group("PerformanceObserver");
  // // FP
  // new PerformanceObserver((entryList) => {
  //   const [entry] = entryList.getEntriesByName('first-paint')
  //   // console.log('FP', entry)
  //   console.log('FP', entry.startTime)
  // }).observe({ type: 'paint', buffered: true })
  // // FCP
  // new PerformanceObserver((entryList) => {
  //   const [entry] = entryList.getEntriesByName('first-contentful-paint')
  //   // console.log('FCP', entry)
  //   console.log('FCP', entry.startTime)
  // }).observe({ type: 'paint', buffered: true })
  // // DOM Ready 和 DNS Time
  // new PerformanceObserver((entryList) => {
  //   const [entry] = entryList.getEntries()
  //   console.log('PerformanceNavigationTiming', entry)
  //   console.log('DOM Ready', entry.domContentLoadedEventEnd - entry.fetchStart)
  //   console.log('DNS Time', entry.domainLookupEnd - entry.domainLookupStart)
  // }).observe({ type: 'navigation' })
  // console.groupEnd();
</script>

<style scoped>
.sign {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(131, 187, 255);
  display: flex;
  justify-content: center;
  align-items: center
}

.sign-container {
  height: 50%;
  flex: 0.35;
  background: #fff;
  border-radius: 5px;
}

.tittle {
  font-size: 25px;
  margin-top: 50px;
}
</style>