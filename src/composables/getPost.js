import {ref} from 'vue'

const getPost = (id)=> {
    const post = ref(null)
    const error = ref(null)

    const load = async() =>{
      try{
        
        await new Promise(resolve =>{
            setTimeout(resolve, 2000 )
        })

        let data = await fetch('http://localhost:3000/posts/' + id)
        if(!data.ok){
          throw Error('포스트가 존재하지 않습니다.')
        }
        post.value = await data.json()

        console.log(data)
      }catch(err){
        error.value = err.message
        console.log(err.message)
      }
    }
    return {post, error, load}

}
export default getPost