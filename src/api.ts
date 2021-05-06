/**
 * API service
 * The following service exposes an API layer
 * to consume the REST server
 *
 */

import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import config from './config';

declare global {
  interface Window {
    I18n: string;
  }
}

class API {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: config.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        locale: window.I18n,
      },
    });
    this.client.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess(response: AxiosResponse) {
    return response;
  }

  handleError = (error: AxiosError<{ error: { response: any } }>) => {
    if (error.response?.status === 401) {
      console.error('authentication error');
      localStorage.removeItem('auth');
    } else {
      return Promise.reject(error);
    }
  };

  async get(path: string, config: any) {
    return await this.client.get(path, config);
  }

  async patch(path: string, payload: any, config: any) {
    return await this.client.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
      ...config,
    });
  }

  async post(path: string, payload: any, config: any) {
    return await this.client.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
      ...config,
    });
  }

  async put(path: string, payload: any, config: any) {
    return await this.client.request({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload,
      ...config,
    });
  }
}

export default new API();
