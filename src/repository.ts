// import { Config } from '@tncApp/services'
/**
 * Repository service
 * The following service exposes a repository
 * to wrap the data types fetched from the TNC servers
 */

import { AxiosInstance } from 'axios';
import API from './api';

class Repository {
  api: AxiosInstance & any;

  constructor() {
    this.api = API;
  }

  async getSustainInfo() {
    return await this.api.get('/v4/impact-calculator');
  }

  async getFavoriteBrandIds(headers: Object) {
    return await this.api.get('/v4/favorites/brands/ids', headers);
  }

  async getFavoriteProductIds(headers: Object) {
    return await this.api.get('/v4/favorites/products/ids', headers);
  }

  async getFavoriteSellerIds(headers: Object) {
    return await this.api.get('/v4/favorites/sellers/ids', headers);
  }

  async getFavoriteIds(headers: Object) {
    return await this.api.get('/v4/favorites/ids', headers);
  }

  async getProductProperties() {
    return await this.api.get('/v4/products/properties');
  }
}

export default new Repository();
