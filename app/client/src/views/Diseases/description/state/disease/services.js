import 'babel-polyfill';
import axios from 'axios';

export const serviceDisease = {
  async getData(params) {
    try {
      const { data } = await axios.get(`http://localhost:3001/searchdiseases/${params}/`);
      return data;
    } catch(e) {
      throw new Error(e.message);
    }
  }
}
