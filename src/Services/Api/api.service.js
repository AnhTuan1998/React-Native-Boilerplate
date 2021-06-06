import Config from '../config'
import Authen from './authen'
import EventEmitter from 'react-native-eventemitter'

export class API {
  config
  constructor() {
    this.config = Config.getInstance()
  }

  async raw(url, params, options) {
    try {
      let paramsWithAuthen = this.buildParamsHeaderAuthen(params)
      let res = await fetch(url, paramsWithAuthen).then(async response => {
        return response.clone().json()
      })
      if (res && res.status === 200) {
        return [null, res]
      } else if (res && res.status === 401) {
        EventEmitter.emit('EXPIRED_TOKEN', 'EXPIRED_TOKEN')
        return [null, null]
      } else {
        return [res?.message || '', null]
      }
    } catch (err) {
      console.warn(url, params, err)
      return [err.message || err, null]
    }
  }

  post(endpoint, params) {
    return this.raw(this.config.base_url + endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(params),
    })
  }

  get(endpoint, params) {
    let url = this.config.base_url + endpoint + '?' + this.serializeData(params)
    return this.raw(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'GET',
    })
  }

  patch(endpoint, params) {
    return this.raw(this.config.base_url + endpoint, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(params),
    })
  }

  buildParamsHeaderAuthen(params) {
    const authen = Authen.getInstance()
    if (authen.isLogined && authen.authenObject) {
      let newParams = params
      newParams.headers.Authorization =
        'Bearer ' + authen.authenObject.accessToken
      return newParams
    } else {
      return params
    }
  }

  serializeData(data) {
    // If this is not an object, defer to native stringification.
    if (!this.isObject(data)) {
      return data == null ? '' : data.toString()
    }
    let buffer = []
    // Serialize each key in the object.
    for (let name in data) {
      if (!data.hasOwnProperty(name)) {
        continue
      }
      let value = data[name]
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          buffer.push(
            encodeURIComponent(name) +
              '=' +
              encodeURIComponent(value[i] == null ? '' : value[i]),
          )
        }
      } else {
        buffer.push(
          encodeURIComponent(name) +
            '=' +
            encodeURIComponent(value == null ? '' : value),
        )
      }
    }
    // Serialize the buffer and clean it up for transportation.
    let source = buffer.join('&').replace(/%20/g, '+')
    return source
  }

  isObject(x) {
    return x != null && typeof x === 'object'
  }
}
