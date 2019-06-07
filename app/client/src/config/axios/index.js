import axios from 'axios';

export const axiosAjax = (() => axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With':'XMLHttpRequest'
  }
}))();

export * from 'axios';
