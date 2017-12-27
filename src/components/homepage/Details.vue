<template>
  <section id="details">
    <div id="main">
      <div id="content">
        <div class="panel">
          <div class="header topic_header">
            <span class="topic_full_title">
              <span class="put_top">置顶</span>
              {{ list.title }}
            </span>
            <div class="changes">
              <span>发布于 6 个月前</span>
              <span>作者<a :href="'#/user/' + list.author.loginname">{{ list.author.loginname }}</a></span>
              <span>{{ list.visit_count }} 次浏览</span>
              <span>最后一次编辑是 3 个月前</span>
              <span> 来自 {{ list.tab | type }}</span>
              <input v-show="!list.is_collect" class="span-common span-success pull-right collect_btn" type="submit" value="收藏" action="collect">
            </div>
          </div>
          <div class="inner topic">
            <div class="topic_content" v-html="list.content">
            </div>
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
      },
      methods: {
        getData: function () {
          var url = 'https://cnodejs.org/api/v1/topic/' + this.$route.params.id;
          this.$http.get(url).then(function (rep) {
            console.log(rep);
            this.list = rep.body.data;
          })
        }
      },
      created: function () {
        console.log(this.$route.params);
        this.getData();
      },
      filters: {
        type: function (val) {
          if(val == 'share') {
            return '分享';
          }
          if(val == 'good') {
            return '精华'
          }
          if(val == 'ask') {
            return '问答'
          }
          if(val == 'job') {
            return '招聘'
          }
        }
      }
  }
</script>

<style>
  #details {
  }
  #content .panel {
    /*margin: 0 5px;*/
  }
  .panel .header.topic_header, .panel .inner {
    background-color: #fff;
  }
  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  #content .topic_full_title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  #content .topic_full_title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  #content .changes {
    font-size: 12px;
    line-height: 20px;
    color: #838383;
  }
  #content .changes span:before {
    content: "•";
    margin-right: 4px;
    font-size: 18px;
  }
  [class*=span].pull-right {
    float: right;
  }
  .span-success {
    border-radius: 3px;
    background-color: #80bd01;
  }
  .span-success {
    border: none;
    display: inline-block;
    float: none;
    padding: 0px 6px;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
  }
  .panel .inner.topic {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
  }
  .topic_content {
    margin: 0 10px;
  }
  .markdown-text>:first-child, .preview>:first-child {
    margin-top: 0;
  }
  .topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
  }
  .markdown-text p, .preview p {
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 2em;
    margin: 1em 0;
  }
  .topic_content h1 {
    font-size: 32.5px;
  }
  h3 {
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
    font-size: 24.5px;
    line-height: 40px
  }
  blockquote {
    padding: 0 0 0 15px;
    margin: 0 0 20px;
    border-left: 5px solid #eee;
  }
  blockquote:before, q:after, q:before {
    content: "";
  }
  ul {
    padding: 0;
    margin: 0 0 10px 25px;
  }
  .topic_content h2 {
    font-size: 26px;
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
  }
  .markdown-text img {
    cursor: pointer;
  }
  img {
    width: auto\9;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  .panel .markdown-text a {
    color: #08c;
  }
  .markdown-text li code, .markdown-text p code, .preview li code, .preview p code {
    color: #000;
    background-color: #fcfafa;
    padding: 4px 6px;
  }
  .markdown-text li, .preview li {
    font-size: 14px;
    line-height: 2em;
  }
</style>
