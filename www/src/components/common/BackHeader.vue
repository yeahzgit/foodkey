<template>
  <div class="back-header">
    <section @click="goBack">
      <i class="icon ion-ios-arrow-back"></i>
      <span>返回</span>
    </section>
    <!-- <section class="title">{{ title }}</section> -->
  </div>
</template>

<script>
export default {
  name: 'BackHeader',
  props: ['title'],
  methods: {
    goBack () {
      history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.back-header {
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 2.5rem;
  border-bottom: 1px solid rgba(51, 51, 51, 0.08);
  padding-left: 1rem;
  color: #dcdde1;
  background-color: white;
  opacity: 0.99;
  section {
    display: flex;
    align-items: center;
    .ion-ios-arrow-back {
      font-size: 1.6rem;
      margin-right: 0.3rem;
    }
  }
}
</style>
