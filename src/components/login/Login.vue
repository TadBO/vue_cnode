<template>
  <section id="login">
    <div class="panel">
      <div class="header">
        <ul class="breadcrumb">
          <li>
            <a href="#">主页</a>
            <span class="divider">/</span>
          </li>
          <li>
            登录
          </li>
        </ul>
      </div>
      <div class="body">
        <form id="signin_form" class="form-horizontal" action="/signin" method="post">
          <div class="control-group">
            <label class="control-label" for="name">用户名</label>

            <div class="controls">
              <input class="input-xlarge" id="name" name="name" size="30" type="text">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="pass">密码</label>

            <div class="controls">
              <input class="input-xlarge" id="pass" name="pass" size="30" type="password">
            </div>
          </div>
          <input type="hidden" name="_csrf" value="Q28qGtzF-yANtED16WcKzuD2KbP-U1NgVcI8">

          <div class="form-actions">
            <input type="submit" class="span-primary" value="登录">
            <a href="/auth/github">
            <span class="span-info">
              通过 GitHub 登录
            </span>
            </a>
            <a id="forgot_password" href="/search_pass">忘记密码了?</a>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style scoped>
  #login {
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
  .panel .body>form.form-horizontal {
    margin-top: 30px;
    margin-bottom: 0;
  }
  .form-horizontal .control-group {
    margin-bottom: 20px;
  }
  .form-horizontal .control-label {
    float: none;
    width: auto;
    padding-top: 0;
    text-align: left;
  }
  .form-horizontal .controls {
    margin-left: 0;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type=text], input[type=password] {
    background: hsla(0,0%,0%,0);
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border linear .2s,box-shadow linear .2s;
    height: 30px;
    padding: 4px 6px;
    font-size: 14px;
    line-height: 20px;
    color: #555;
    border-radius: 4px;
  }
  .form-horizontal input {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .span-primary {
    border-radius: 3px;
    background-color: #08c;
    border: none;
    padding: 3px 10px;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    line-height: 2em;
    color: #fff;
  }
  .span-info {
    display: inline-block;
    float: none;
    padding: 3px 10px;
    border: none;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: none;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    background-color: #5bc0de;
  }
  .panel .body a {
    color: #778087;
  }
  #forgot_password {
    margin-left: 1em;
  }
</style>
