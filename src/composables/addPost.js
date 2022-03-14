import { ref } from 'vue'

const addPost = (post) => {

    const load = async () => {
        const error = ref(null)
        try {

            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })

            let data = await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(post)
            })
            if (data.ok) {
                this.$router.push('/')

            } else {
                throw Error('예기치 못한 오류가 발생했습니다.')

            }
            console.log(data)
        } catch (err) {
            error.value = err.message
            console.log(err.message)
        }
    }
    return {load}

}
export default addPost