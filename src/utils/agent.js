import axios from 'axios';

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${'auth.getToken()'}`,
        ...config.headers
      }
    };
  },
  error => {
    return Promise.reject(error);
  }
);

export const get = (url, headers=null) =>
  axios({
    method: 'get',
    headers,
    url
  });

export const post = (url, data, headers=null) =>
  axios({
    method: 'post',
    headers,
    url,
    data
  });

export const put = (url, data, headers=null) =>
  axios({
    method: 'put',
    headers,
    url,
    data
  });

export const del = (url, data=null) =>
  axios({
    method: 'delete',
    data,
    url
  });
