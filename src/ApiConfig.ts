import axios, { AxiosPromise } from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const toPromise = <T>(p: AxiosPromise<T>) => {
  return new Promise<T>((resolve, reject) => {
    p.then(r => {
      if (r.status === 200) {
        resolve(r.data);
      }
    }).catch(e => {
      reject(e);
    })
  })
}
