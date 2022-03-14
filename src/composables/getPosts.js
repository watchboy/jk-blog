import { ref } from "@vue/reactivity";

const getPosts = () =>{
    const posts = ref([])
    const error = ref(null)

    const load = async() =>{
      try{
        
        await new Promise(resolve =>{
            setTimeout(resolve, 1000 )
        })
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok){
          throw Error('no data available')
        }
        posts.value = await data.json()

        console.log(data)
      }catch(err){
        error.value = err.message
        console.log(err.message)
      }
    }
    return {posts, error, load}
}
export default getPosts