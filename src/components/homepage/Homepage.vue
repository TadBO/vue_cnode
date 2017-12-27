<template>
  <section>
    <div class="header"  @click="changeClass" id="scrollView">
      <router-link to="/all" class="active" data-link="1">全部</router-link>
      <router-link to="/good" data-link="1">精华</router-link>
      <router-link to="/share" data-link="1">分享</router-link>
      <router-link to="/ask" data-link="1">问答</router-link>
      <router-link to="/job" data-link="1">招聘</router-link>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
  export default {
    data: function () {
      return {
        loading: false,
        page: 0
      }
    },
    methods: {
      changeClass: function (e) {
        if(e.target.hasAttribute('data-link')) {
          for(var i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].removeAttribute('class', 'active');
          }
          e.target.setAttribute('class', 'active');
        }
      }
    }
  }
</script>

<style scoped>
  #scrollView {
    padding: 10px;
    margin-top: 110px;
  }
  .header {
    background-color: #f6f6f6;
    padding: 10px;
    line-height: 30px;
    font-size: 14px;
  }
  .header a {
    margin: 0 16px;
    color: #80bd01;
  }
  .header .active {
    background-color: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
  }
</style>
