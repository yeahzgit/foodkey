<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    let userInfo = sessionStorage.getItem('userInfo')
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
      this.$store.state.user.userInfo = userInfo
    }
    // else {
    //   // 登录或关闭无痕模式
    // }
  }
}
</script>

<style>
@import url('./assets/style/index.css');
</style>
