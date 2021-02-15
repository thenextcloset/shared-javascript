// import { Config } from '@tncApp/services'
/**
 * Repository service
 * The following service exposes a repository
 * to wrap the data types fetched from the TNC servers
 */

import { AxiosInstance } from 'axios'
import API from './api'

class Repository {
  api: AxiosInstance & any

  constructor() {
    this.api = API
  }

  async signIn(params: any) {
    await this.api.post('/auth/sign_in', params)
  }

  async resetPassword(params: any) {
    await this.api.post('/user/reset_password', params)
  }

  async createUser(params: any) {
    await this.api.post('/v4/users', params)
  }

  async updateUser(params: any, headers: Record<string, any>) {
    await this.api.put(`/v4/users/current`, params, headers)
  }

  async getUserDetails(headers: Record<string, any>) {
    await this.api.get('/v4/users/current', headers)
  }

  async findCreateSocialUser(params: any) {
    await this.api.post('/v4/users/oauth_login', params)
  }

  async getProducts(params: any, headers: Record<string, any>) {
    await this.api.post('/v4/products', params, headers)
  }

  async getProduct(productId: number, headers: Record<string, any>) {
    await this.api.get(`/v4/products/${productId}`, headers)
  }

  async getProductSuggestions(productId: number, headers: Record<string, any>) {
    await this.api.get(`/v4/products/${productId}/product_suggestions`, headers)
  }

  async getClosets() {
    await this.api.get('/v4/user/closet_of')
  }

  async getBrands() {
    await this.api.get('/v4/products/brands')
  }

  async getProperties() {
    await this.api.get('/v4/products/properties')
  }

  async getSustainInfo() {
    await this.api.get('/v4/impact-calculator')
  }

  async getUserProducts(headers: Record<string, any>) {
    await this.api.get('/v4/users/current/products', headers)
  }

  async getUserProperties(id: number | string) {
    await this.api.get(`/v4/users/${id}`)
  }

  async getFavorites(headers: Record<string, any>) {
    await this.api.get('/v4/favorites', headers)
  }

  async addFavorites(params: any, headers: Record<string, any>, type: string) {
    await this.api.post(`/v4/favorites/${type}`, params, headers)
  }

  async removeFavorites(
    params: any,
    headers: Record<string, any>,
    type: string
  ) {
    await this.api.delete(`/v4/favorites/${type}`, params, headers)
  }

  async uploadFile(file: any) {
    await this.api.postFile(`/v4/assets`, file)
  }

  async uploadProduct(params: any, headers: Record<string, any>) {
    await this.api.post(`/v4/users/current/products`, params, headers)
  }

  async updateProduct(params: any, headers: Record<string, any>) {
    await this.api.put(
      `/v4/users/current/products/${params.id}`,
      { product: params.product },
      headers
    )
  }

  async getCartProducts(headers: Record<string, any>) {
    await this.api.get(`/v4/carts`, headers)
  }

  async addToCart(params: any, headers: Record<string, any>) {
    await this.api.post(`/v4/carts/products`, params, headers)
  }

  async removeFromCart(params: any, headers: Record<string, any>) {
    await this.api.delete(`/v4/carts/products`, params, headers)
  }

  async getPaymentMethods() {
    await this.api.get(`/v4/payment_methods`)
  }

  async verifyCoupon(
    headers: Record<string, any>,
    { code, total, shipping }: any
  ) {
    await this.api.get(
      `/v4/coupons/${code}?total=${total}&shipping=${shipping}`,
      headers
    )
  }

  async createOrder(params: any, headers: Record<string, any>) {
    await this.api.post(`/v4/users/current/orders`, params, headers)
  }

  async getOrders(headers: Record<string, any>) {
    await this.api.get(`v4/users/current/orders`, headers)
  }

  async getOrder(id: number, headers: Record<string, any>) {
    await this.api.get(`v4/users/current/orders/${id}`, headers)
  }

  async getUserNotifications(headers: Record<string, any>) {
    await this.api.get(`/v4/users/current/user-notifications`, headers)
  }

  async getRelistReturn(headers: Record<string, any>) {
    await this.api.get(`/v4/users/current/relist-return`, headers)
  }

  async updateReturn(params: any, headers: Record<string, any>) {
    await this.api.post(
      `/v4/users/current/relist-return/return`,
      params,
      headers
    )
  }

  async updateRelist(params: any, headers: Record<string, any>) {
    await this.api.post(
      `/v4/users/current/relist-return/relist`,
      params,
      headers
    )
  }

  async updateUserNotifications(params: any, headers: Record<string, any>) {
    await this.api.patch(
      `/v4/users/current/user-notifications`,
      params,
      headers
    )
  }

  // async getUnreadConversations(userId: string) {
  //    await this.api.get(
  //     `${Config.inbox.apiUrl}${Config.inbox.appId}/users/${userId}/conversations?unreadsOnly=true`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${Config.inbox.apiKey}`,
  //       },
  //     }
  //   )
  // }

  async updatePassword(params: any) {
    await this.api.patch(`/v4/users/update_password`, params)
  }

  async uploadAvatar(
    headers: Record<string, any>,
    file: any,
    key: string,
    filename: string
  ) {
    await this.api.putFile('/user', headers, file, key, filename)
  }
}

export default new Repository()
