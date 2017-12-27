<template>
  <section id="header">
    <div class="header">
      <div class="logo">
        <img src="../../assets/cnodejs_light.svg" alt="">
      </div>
      <div class="search">
        <input type="search" placeholder="请输入关键字">
      </div>
    </div>
  </section>
</template>

<script>
  export default {
      data: function () {
        return {

        }
      }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 44px;
    background-color: #444;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .logo {
    flex: 0.3;
    line-height: 44px;
    padding:0 5px;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .search {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:0 10px;
  }
  .search input {
    height: 30px;
    line-height: 30px;
    border: none ;
    width: 98%;
    border-radius: 15px;
    font-size: 14px;
    padding: 0 20px;
    background: #fff url("../../assets/search.e53b380a.hashed.png") no-repeat 2px;
  }
</style>
