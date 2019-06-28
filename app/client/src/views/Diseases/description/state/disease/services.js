import 'babel-polyfill';
import axios from 'axios';

export const serviceDisease = {
  async getData(params) {
    try {
      const { data } = await axios.get(`http://192.168.1.11:9000/searchdiseases/${params}/`);
      return data;
    } catch(e) {
      throw new Error(e.message);
    }
  }
}
