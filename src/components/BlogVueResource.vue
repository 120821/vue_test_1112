<template>
  <div >
    <div>
      <p> 标题： {{ blog.title }}  </p>
      <p> 发布于： {{blog.created_at }}</p>
      <div>
       {{ blog.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogShow',
  data () {
    return {
      blog: {}
    }
  },
  mounted() {
    this.$http.get('https://admin.linlin.fun/blogs/id='+this.$route.query.id).then((response) => {
       this.blog = response.body.result
    }, (response) => {
       console.error(response)
    });
  }
}
</script>

<style>
</style>
