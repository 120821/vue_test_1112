<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      今天下了大雨，<br>
      傍晚的风很凉爽。
      <a href="https://linlin.fun" target="_blank" rel="noopener">今天还写了一些博客。</a>.
    </p>
    <h3>这是《星期六晚上我们去散步吧》里的一些很好的句子，记录一下。</h3>
    <ul>
      <li><a href="https://weread.qq.com/web/bookDetail/d59326c0813ab7bbdg017221" target="_blank" rel="noopener">去试看一下</a></li>
      <li><a href="https://weread.qq.com/" target="_blank" rel="noopener">更多书籍</a></li>
      <li><a href="https://www.kongfz.com/" target="_blank" rel="noopener">很多纸质书籍</a></li>
    </ul>
    <h3>晚霞</h3>
    <ul>
      <li>
        天空打翻颜料
      </li>
      <li>
        花了一个傍晚清洗
      </li>
      <li>
        这个恶作剧
      </li>
      <li>
        真令人开心
      </li>
    </ul>
    <h3>好看的章节</h3>
    <ul>
      <li><a href="https://weread.qq.com/web/reader/d59326c0813ab7bbdg017221k8f832cb02b28f85517960bf" target="_blank" rel="noopener">一个童年</a></li>
      <li><a href="https://weread.qq.com/web/reader/d59326c0813ab7bbdg017221ka25329702bda2557a7b2ba9" target="_blank" rel="noopener">西瓜</a></li>
      <li><a href="https://weread.qq.com/web/reader/d59326c0813ab7bbdg017221k0e6320502c60e65972dc52f" target="_blank" rel="noopener">清醒的星星</a></li>
      <li><a href="https://weread.qq.com/web/reader/d59326c0813ab7bbdg017221k84d326502c784d9ee44ebbe" target="_blank" rel="noopener">模仿</a></li>
      <li><a href="https://weread.qq.com/web/reader/d59326c0813ab7bbdg017221k854328602ca854d6fae52ca" target="_blank" rel="noopener">花与花</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
