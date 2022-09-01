<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="$router.back()">后退</button>
    <h4 class="text-center">商品详情 --- {{ id }}</h4>
    <img src="/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'MyGoodsDetail',
  props: ['id']
}
</script>

<style lang="less" scoped>
</style>
