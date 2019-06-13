import 'babel-polyfill';
import axios from 'axios';

export const serviceMedicine = {
  async getData() {
    try {
      const { data } = await axios.get('http://localhost:3001/searchmedicines/I');
      return data;
    } catch(e) {
      throw new Error(e.message);
    }
  }
}
