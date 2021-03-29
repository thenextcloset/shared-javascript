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

  async getProduct(id: string) {
    return await this.api.get(`/v2/products/${id}`);
  }

  async getOrders(id: string, headers: Object) {
    return await this.api.get(`v4/orders/${id}`, headers);
  }

  async getSeller(id: string) {
    return await this.api.get(`/user/${id}`);
  }

  async getFavorites(headers: Object) {
    return await this.api.get('/v4/favorites', headers);
  }
  async addFavorites(params: any, headers: Object, type: string) {
    return await this.api.post(`/v4/favorites/${type}`, params, headers);
  }

  async getFavoriteBrands(headers: Object) {
    return await this.api.get('/v4/favorites/brands', headers);
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

  getDegredationMessage() {
    return this.api.get('/v4/degradation-message');
  }

  async getUserNotifications(headers: Object) {
    return await this.api.get('v4/users/current/user-notifications', headers);
  }

  async updateUserNotifications(params: any, headers: Object) {
    return await this.api.patch('v4/users/current/user-notifications', params, headers);
  }
}

export default new Repository();
