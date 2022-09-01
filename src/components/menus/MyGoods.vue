<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">商品管理</h4>

    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>商品名</th>
          <th>商品图</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in goodslist" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td><img :src="item.img" alt=""></td>
          <td>{{ item.price }}</td>
          <td>{{ item.count }}</td>
          <td>
            <a href="#" @click.prevent="gotoDetail(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyGoods',
  data() {
    return {
      // 商品列表数据
      goodslist: [
        { id: 1, name: '手机', price: 1800, count: 100, img: '/logo.png' },
        { id: 2, name: '电脑', price: 5880, count: 99, img: '/wangzhe.png' },
        { id: 3, name: '冰箱', price: 1500, count: 199, img: '/logo.png' },
        { id: 4, name: '空调', price: 3000, count: 299, img: '/logo.png' }
      ]
    }
  },
  methods: {
    gotoDetail(id) {
      //   /home/userinfo/1
      //   /home/userinfo/2
      //   /home/userinfo/3
      this.$router.push('/home/goodsinfo/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
img {
  height: 20px;

}
</style>
