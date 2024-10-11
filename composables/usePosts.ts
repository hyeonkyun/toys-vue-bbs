// composables/usePosts.ts
import { ref } from 'vue';
import { Post } from '~/types/post';

const posts = ref<Post[]>([]);

export function usePosts() {
    const addPost = (post: Post) => {
        posts.value.push(post);
    };

    const fetchPosts = async () => {
        const { data } = await useFetch('/api/posts');
        posts.value = data.value || [];
    };

    return { posts, addPost, fetchPosts };
}
