<template>
  <div v-if="posts.length">
    <h2>게시글 목록</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>게시글이 없습니다.</p>
  </div>
</template>

<script setup lang="ts">
import { usePosts } from '~/composables/usePosts';
const { posts } = usePosts();
</script>
