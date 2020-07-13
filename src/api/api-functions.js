import axios from 'axios'
import api from '../api.conf'

const Api = () => {
    return {
        default: async () => {
            let locals = []
            try {
              const response = await axios.get(`${api.url}`)
              return response.data || locals
            } catch (error) {
              console.error(error.toString())
            }
            return locals
          },
    }
}

export default Api;