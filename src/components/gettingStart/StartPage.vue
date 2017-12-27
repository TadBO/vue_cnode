<template>
  <section id="start">
      <div class="panel">
        <div class="header">
          <ul class="breadcrumb">
            <li>
              <a href="#">主页</a>
              <span class="divider">/</span>
            </li>
            <li>
              Node.js 新手入门
            </li>
          </ul>
        </div>
        <div class="body">
          <div class="content">
            <div class="markdown-text"><h2>Node.js 入门</h2>
              <p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
              <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
              <p>《<strong>Node.js 包教不包会</strong>》</p>
              <p><a href="https://github.com/alsotang/node-lessons" target="_blank">https://github.com/alsotang/node-lessons</a></p>
              <p>《<strong>ECMAScript 6入门</strong>》</p>
              <p><a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></p>
              <p>《<strong>七天学会NodeJS</strong>》</p>
              <p><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank">https://github.com/nqdeng/7-days-nodejs</a></p>
              <h2>Node.js 资源</h2>
              <p>《<strong>前端资源教程</strong>》</p>
              <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e" target="_blank">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
              <p>《<strong>国内的 npm 镜像源</strong>》</p>
              <p><a href="http://cnpmjs.org/" target="_blank">http://cnpmjs.org/</a></p>
              <p>《<strong>node weekly</strong>》</p>
              <p><a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a></p>
              <p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
              <p><a href="https://github.com/youyudehexie/node123" target="_blank">https://github.com/youyudehexie/node123</a></p>
              <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
              <p><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">https://github.com/sindresorhus/awesome-nodejs</a></p>
              <p>《<strong>Node.js Books</strong>》</p>
              <p><a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a></p>
              <h2>Node.js 名人</h2>
              <p>《<strong>名人堂</strong>》</p>
              <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
              <h2>Node.js 服务器</h2>
              <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
            </div>

          </div>
        </div>
      </div>
  </section>

</template>

<script>
  export default {
      data: function () {
        return {
            list: []
        }
      }
  }
</script>

<style scoped>
  #start {
    padding: 10px;
    margin-top: 110px;
  }
  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .header .breadcrumb {
    padding: 0;
    margin: 0;
    border: none;
    background: 0 0;
  }
  .breadcrumb li {
    display: inline-block;
    line-height: 20px;
    font-size: 14px;
  }
  .breadcrumb a {
    color: #80bd01;
  }
  .breadcrumb .divider {
    padding: 0 5px;
    color: #ccc;
  }
  .breadcrumb li:nth-child(2) {
    color: #999;
  }
  .body {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
  }
  .markdown-text>:first-child, .preview>:first-child {
    margin-top: 0;
  }
  .content h2 {
    font-size: 26px;
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
  }
  .content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
    margin: 1em 0;
  }
  .panel .markdown-text a {
    color: #08c;
  }
</style>
