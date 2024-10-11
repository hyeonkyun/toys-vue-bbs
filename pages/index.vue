<!-- pages/index.vue -->
<template>
  <div>
    <PostForm />
    <PostList />
  </div>
</template>

<script setup lang="ts">
import PostForm from '~/components/PostForm.vue';
import PostList from '~/components/PostList.vue';
import { usePosts } from '~/composables/usePosts';

const { fetchPosts } = usePosts();

onMounted(() => {
  fetchPosts();
});
</script>
