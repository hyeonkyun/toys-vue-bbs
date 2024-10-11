<template>
  <form @submit.prevent="submitPost">
    <div>
      <input v-model="newPost.title" type="text" placeholder="제목" required />
    </div>
    <div>
      <textarea v-model="newPost.content" placeholder="내용" required></textarea>
    </div>
    <button type="submit">글 작성</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePosts } from '~/composables/usePosts';
import { Post } from '~/types/post';

const { addPost } = usePosts();
const newPost = ref<Post>({ title: '', content: '', id: 0 });

const submitPost = () => {
  addPost(newPost.value);
  newPost.value = { title: '', content: '', id: 0 };
};
</script>
