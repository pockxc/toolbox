import axios from 'axios'
import { message } from 'ant-design-vue'

const baseURL = '/'

const instance = axios.create({
  baseURL,
  timeout: 20000
})

instance.interceptors.request.use(
  (response) => response,
  (err) => Promise.reject(err)
)

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response && err.response.data) {
      const code = err.response.status
      const msg = err.response.data.message
      message.error(`Code: ${code}, Message: ${msg}`)
      // eslint-disable-next-line no-console
      console.error('[Axios Error]', err.response)
    } else {
      message.error(`${err}`)
    }
    return Promise.reject(err)
  }
)

export default axios
