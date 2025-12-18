<script>
import gql from 'graphql-tag'

export default {
    name: 'TestView',
    apollo: {
        posts: gql`query {
                        posts{
                            data {
                            id
                            title
                            
                            }
                        }
                    }`,
        post: {
            query: gql`query GetPost($id: ID!) {
                        post(id: $id) {
                            id
                            title
                            body
                        }
                    }`,
            variables() {
                return {
                    id: this.postId
                }
            }
        }
    },
    data() {
        return {
            postId: 1
        }
    },
    methods: {
        logData() {
            console.log("loading all posts: " + this.$apollo.queries.posts.loading);
            console.log("loading one post: " + this.$apollo.queries.post.loading);
            console.log(this.posts);
            console.log(this.post);
        },
        incrementPostId() {
            this.postId++;
        }

    }
};
</script>

<template>

    <div>
        <h1>Vue Apollo - Options</h1>

            <p>This View uses <a href="https://www.npmjs.com/package/vue-apollo">@vue/apollo-option</a></p>

  
        <div v-if="$apollo.loading">Something is loading...</div>

        <button @click="incrementPostId">Get Next Post From API</button>

        <hr>

        <!-- Single Post -->
        <div v-if="$apollo.queries.post.loading">Loading post with ID {{ postId }}...</div>
        <div v-else>
            <h2>Post ID {{ post?.id }}</h2>
            <h3>{{ post?.title }}</h3>
            <p>{{ post?.body }}</p>
        </div>

        <hr>

        <!-- All Posts -->
        <div v-if="$apollo.queries.posts.loading">Loading all posts...</div>
        <ul v-else>
            <li v-for="post in posts?.data" :key="post.id">
                {{ post.id }}: {{ post.title }}
            </li>
        </ul>

    </div>
</template>

<style scoped></style>