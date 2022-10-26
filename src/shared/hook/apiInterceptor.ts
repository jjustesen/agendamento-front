import axios from 'axios'
import Router from 'next/router'

const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response.status === 400) {
        Router.push('/')
      }
    }
  )
  return null
}

export default AxiosInterceptor
