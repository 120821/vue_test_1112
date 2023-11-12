<template>
  <div>
    <div>
      <p>标题：{{ blog.title }}</p>
      <p>发布于：{{ blog.created_at }}</p>
      <div>{{ blog.body }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'BlogShow', // 修改组件名称为多个单词的形式
  setup() {
    const router = useRouter();
    const blog = ref({});

    onMounted(() => {
      axios
        .get('https://admin.linlin.fun/api/v1/blogs/' + router.currentRoute.value.query.id)
        .then((response) => {
          console.info('== response.data: ', response.data);
          blog.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return {
      blog,
    };
  },
};
</script>

<style>
</style>
