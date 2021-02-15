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

  async getSustainInfo() {
    return await this.api.get("/v4/impact-calculator");
  }
}

export default new Repository()
