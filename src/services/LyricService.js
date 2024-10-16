import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:9000"
})

export default {
    
    getLyrics() {
        return http.get(`/lyrics`)
    },

    getLyricsBySongId(id) {
        return http.get(`/lyrics/${id}`)
    },

    search(input) {
        return http.get(`lyrics/api/${input}`)
    }

}