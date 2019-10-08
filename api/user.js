import axios from 'axios'
import './config'
export default {
  // company
  getCompany (params) {
    return axios.get('user/company', {params: params})
  }
}
