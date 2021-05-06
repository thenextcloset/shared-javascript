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

  // async getProduct(id: string) {
  //   return await this.api.get(`/v2/products/${id}`);
  // }

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

  async removeFavorites(params: any, headers: Object, type: string) {
    return await this.api.delete(`/v4/favorites/${type}`, params, headers);
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

  async uploadFile(file: any) {
    return await this.api.postFile(`/v4/assets`, file);
  }

  async uploadProduct(params: any, headers: Object) {
    return await this.api.post(`/v4/users/current/products`, params, headers);
  }

  async updateProduct(params: any, headers: Object) {
    return await this.api.put(
      `/v4/users/current/products/${params.id}`,
      { product: params.product },
      headers
    );
  }

  async getProduct(productId: number, headers: Object) {
    return await this.api.get(`/v4/products/${productId}`, headers);
  }

  async getUserDetails(headers: Object) {
    return await this.api.get('/v4/users/current', headers);
  }

  async getUserNotifications(headers: Object) {
    return await this.api.get('v4/users/current/user-notifications', headers);
  }

  async updateUserNotifications(params: any, headers: Object) {
    return await this.api.patch('v4/users/current/user-notifications', params, headers);
  }

  async updateLineItems(id: string, params: any, headers: Object) {
    return await this.api.patch(`v4/line-items/change-state/${id}`, params, headers);
  }

  async getLineItem(id: string, headers: Object) {
    return await this.api.get(`v4/line-items/${id}`, headers);
  }

  getDegredationMessage() {
    return this.api.get('/v4/degradation-message');
  }
}

export default new Repository();
