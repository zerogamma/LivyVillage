import axios from 'axios'
import api from '../api.conf'

const Api = { 'default': async () => {
            try {
              return await axios.get(`${api.url}`).then(resp => resp.data);
            } catch (error) {
              return error.message
            }
} }

export default Api;