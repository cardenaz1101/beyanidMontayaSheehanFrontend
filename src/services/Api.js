import axios from 'axios'

export default () => {
    return axios.create({
        baseURL : 'http://77dd-186-28-79-217.ngrok.io/',
    })
}