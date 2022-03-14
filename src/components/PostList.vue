<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
  props: ["posts"],
  setup(props){
      onMounted(()=>{
          
      })
  },
  components :{
      SinglePost
  }
}
</script>

<style>
</style>