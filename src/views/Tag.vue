<template>
<div class="tag">
   <div v-if="filterPost.length">
      <PostList :posts="filterPost"/>
      <TagCloud :posts="posts"/>

    </div>
    <div v-else>
      <Spinner/>
    </div>
</div>

</template>

<script>
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import { computed } from '@vue/runtime-core'
import {useRoute} from 'vue-router'
export default {
  components:{
      PostList,Spinner,TagCloud
  },
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts();

    load();
    const filterPost = computed(()=>{
        return posts.value.filter((posts)=> {
            return posts.tags.includes(route.params.tag)
        })
    })
    return { posts, error,filterPost};
  },
};
</script>

<style>
    .tag{
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
</style>