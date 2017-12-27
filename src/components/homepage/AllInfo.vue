<template>
  <section>
    <div>
      <ul>
        <li v-for="item in infoList">
          <div class="cell">
            <a :href="'#/details/' + item.id ">
              <img :src=" item.author.avatar_url " alt="">
              <span class="reply_count">{{ item.reply_count }}/{{ item.visit_count }}</span>
              <span class="last_time">{{ item.last_reply_at | lastTime }}</span>
              <div class="info">
                <span class="put_top" v-show=" item.top">置顶</span>
                <span class="put_tab" v-show="!item.top">{{ item.tab | type}}</span>
                <span class="title">{{ item.title }}</span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <mugen-scroll :handler="fetchData" :should-handle="!loading" :threshold="1">
    </mugen-scroll>
  </section>
</template>

<script>
  import MugenScroll from 'vue-mugen-scroll'
  export default {
    data: function () {
      return {
        infoList: [],
        page: 0,
        tabType: this.$route.path.split('/')[1],
        loading: false
      }
    },
    methods: {
      getInfoList: function () {
        var url = 'https://cnodejs.org/api/v1/topics?page='+ this.page +'&limit=10&tab=' + this.tabType;
        this.$http.get(url).then(function(data){
          this.infoList = data.body.data;
        });
      },
      fetchData() {
        this.loading = true
        this.page++;
        var url = 'https://cnodejs.org/api/v1/topics';
        this.$http.get(url, {
          params: {
              page: this.page,
              limit: 10,
              tab: this.tabType
          }
        }).then(function (res) {
          this.infoList = this.infoList.concat(this.infoList,res.body.data);
        })
        this.loading = false
      }
    },
    created: function () {
      this.getInfoList()
    },
    filters: {
      lastTime: function (val) {
        var date = new Date(val);
        var t = Date.now() - date;
        var d=Math.floor(t/1000/60/60/24),
          h=Math.floor(t/1000/60/60%24),
          m=Math.floor(t/1000/60%60),
          s=Math.floor(t/1000%60);
        if( d > 0 ) {
          return d + '天前'
        }else if( h > 0){
          return h + '小时前'
        }else if( m > 0) {
          return m + '分钟前'
        }else if( s > 0) {
          return s + '秒前'
        }
      },
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

    },
    watch: {
        $route: function (val, oldval) {
          this.page = 1;
          this.tabType = val.path.split('/')[1];
          this.getInfoList();
        }
    },
    components: {MugenScroll}
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }
  ul {
    width: 100%;
    overflow: hidden;
    height: 100%;
    margin: 0;
  }
  li {
    width: 100%;
  }
  .cell {
    position: relative;
    padding: 5px 0 10px 10px;
    font-size: 12px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
  .cell img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    float: left;
    margin-top: 10px;
  }
  .cell a {
    display: block;
    color: #888;
  }
  .cell .reply_count {
    position: absolute;
    bottom: 0;
    left: 85px;
    text-align: left;
    line-height: 2em;
    font-size: 10px;
  }
  .cell .last_time {
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: .8em;
  }
  .cell .info {
    padding-left: 10px;
    line-height: 41px;
    text-align: left;
    overflow: hidden;
  }
  .info .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .info .put_tab {
    background: #e5e5e5;
    padding: 2px 4px;
    border-radius: 3px;
    color: #999;
    font-size: 12px;
  }
  .info .title {
    font-size: 14px;
    max-width: 70%;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .page-infinite-wrapper {
    margin-top: -1px;
  }
  .page-infinite-loading {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>
