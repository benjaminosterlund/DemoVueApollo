<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { watchEffect, computed } from 'vue'



export default {
    setup() {
        const { result, loading, error } = useQuery(gql`
                                        query {
                                            posts{
                                                data {
                                                id
                                                title
                                                
                                                }
                                            }
                                        }
                                    `);


        watchEffect(() => {
            console.log(result.value)
        })

        const posts = computed(() => result.value?.posts?.data || []);
        // Return the data to the template 
        return {
            posts,
            loading, 
            error
        }
    },
}
</script>


<template>
 

    <div>
        <h1>Vue Apollo - Composable</h1>

   <p>This View uses <a href="https://www.npmjs.com/package/@vue/apollo-composable">@vue/apollo-composable</a></p>


   <hr>


           <!-- All Posts -->
        <div v-if="loading">Loading all posts...</div>
        <ul v-else>
            <li v-for="post in posts" :key="post.id">
                {{ post.id }}: {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>