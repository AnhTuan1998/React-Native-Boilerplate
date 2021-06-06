import { API } from './api.service'
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'

export default class UserService {
  api = new API()
  constructor() {}

  async login(params) {
    let [err, data] = await this.api.post('/v1/user/login', params)
    return [err, data]
  }

  async logout(params) {
    let [err, data] = await this.api.post('/v1/user/logout', params)
    return [err, data]
  }
}
