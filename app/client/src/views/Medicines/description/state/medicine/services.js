import 'babel-polyfill';
import axios from 'axios';

export const serviceMedicine = {
  async getData() {
    try {
      const { data } = await axios.get('http://www.json-generator.com/api/json/get/ceyxJkGvuG?indent=2');
      return data;
    } catch(e) {
      throw new Error(e.message);
    }
  }
}
