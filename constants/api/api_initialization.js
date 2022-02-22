import axios from 'axios'

const API_INIT =  axios.create({
    baseURL:process.env.NEXT_PUBLIC_VIMDESK_BASE_URL,
    headers:
    {
        Accept: "application/json",
        Authorization: "Bearer Token",
        Token: typeof window !== 'undefined'?
                    localStorage.getItem("session_token") === null ?
                        ""
                        :
                        localStorage.getItem("session_token")
                    :
                    null,
    }
})



export default API_INIT;