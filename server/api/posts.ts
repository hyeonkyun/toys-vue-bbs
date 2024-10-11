import { Post } from '~/types/post';

let posts: Post[] = [
    { id: 1, title: '첫 번째 게시글', content: '첫 번째 게시글의 내용' },
    { id: 2, title: '두 번째 게시글', content: '두 번째 게시글의 내용' },
];

export default defineEventHandler(async (event) => { // async 추가
    if (event.node.req.method === 'GET') {
        return posts;
    }

    if (event.node.req.method === 'POST') {
        const body = await readBody<Post>(event); // await 사용 가능
        posts.push({ ...body, id: posts.length + 1 });
        return body;
    }
});
