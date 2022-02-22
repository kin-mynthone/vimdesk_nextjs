import axios from 'axios'

const API_INIT =  axios.create({
    baseURL:process.env.NEXT_PUBLIC_VIMDESK_BASE_URL
})



export default API_INIT;