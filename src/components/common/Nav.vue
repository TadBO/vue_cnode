<template>
  <section id="nav">
    <ul>
      <li>
        <router-link to="/">
          首页
        </router-link>
      </li>
      <li>
        <router-link to="/start">
          新手入门
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          关于
        </router-link>
      </li>
      <li>
        <router-link to="/sign">
          登录
        </router-link>
      </li>
      <li>
        <router-link to="/register">
          注册
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #nav {
    background-color: #444;
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 42px;
  }
  ul {
    height: 40px;
    list-style: none;
    width: 100%;
    margin: 0;
  }
  li {
    float: left;
    width: 20%;
    text-align: center;
  }
  a {
    text-decoration: none;
    line-height: 40px;
    font-size: 15px;
    color: #fff;
  }

</style>
