<template>
  <div>
    <a :href="'/blog/' + blog.id">{{ blog.title }}</a>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const blogs = ref([]);

    const showBlog = (blogId) => {
      router.push({ name: 'Blog', params: { id: blogId } });
    };

    onMounted(() => {
      axios
        .get('https://admin.linlin.fun/api/v1/blogs')
        .then((response) => {
          console.info('== response.data: ', response.data);
          blogs.value = response.data.blogs;
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return {
      blogs,
      showBlog,
    };
  },
};
</script>

<style>
td {
  border-bottom: 1px solid grey;
}
</style>
