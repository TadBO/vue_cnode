<template>
  <section id="about">
    <div class="panel">
      <div class="header">
        <ul class="breadcrumb">
          <li>
            <a href="#">主页</a>
            <span class="divider">/</span>
          </li>
          <li>
            关于
          </li>
        </ul>
      </div>
      <div class="body">
        <div class="content">
          <div class="markdown-text"><h2>关于</h2>
            <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
            <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
            <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
            <p>社区目前由 <a href="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</a> 在维护，有问题请联系：<a href="https://github.com/alsotang" target="_blank">https://github.com/alsotang</a></p>
            <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</a></p>
            <h2>移动客户端</h2>
            <p>客户端由 <a href="https://cnodejs.org/user/soliury" target="_blank">@soliury</a> 开发维护。</p>
            <p>源码地址： <a href="https://github.com/soliury/noder-react-native" target="_blank">https://github.com/soliury/noder-react-native</a> 。</p>
            <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
            <p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design" target="_blank">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #about {
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
