import AsyncStorage from '@react-native-community/async-storage'

export default class Authen {
  inited = false
  touchID = false
  isLogined = false
  isFirstAuthen = true
  isPhone = null
  authenObject

  constructor() {}

  static instance
  static getInstance() {
    if (!this.instance) {
      this.instance = new Authen()
    }
    return this.instance
  }

  async initAuthen() {
    if (this.inited) {
      return
    }
    let authenJson = await AsyncStorage.getItem('@Session:authenObject')
    if (authenJson) {
      let authenObj = JSON.parse(authenJson)
      await this.saveAuthenObject(authenObj)
      this.inited = true
    } else {
      this.inited = true
    }
    console.log('Authen service initialized!')
  }

  async saveAuthenObject(headerData) {
    let touchID = headerData.touchID === undefined ? false : headerData.touchID
    let isLogined =
      headerData.isLogined === undefined ? false : headerData.isLogined
    let isFirstAuthen =
      headerData.isFirstAuthen === undefined ? true : headerData.isFirstAuthen
    let authenObject = {
      ...headerData,
      touchID: touchID,
      isLogined: isLogined,
      isFirstAuthen: isFirstAuthen,
    }
    this.isPhone = headerData?.sodienthoai
    this.isLogined = isLogined
    this.touchID = touchID
    this.isFirstAuthen = isFirstAuthen
    this.authenObject = authenObject
    await AsyncStorage.setItem(
      '@Session:authenObject',
      JSON.stringify(authenObject),
    )
  }

  async setAuthenObj(authenObj) {
    this.touchID = authenObj.touchID
    this.isFirstAuthen = authenObj.isFirstAuthen
    this.isLogined = authenObj.isLogined
    this.isPhone = authenObj.phone
    this.authenObject = authenObj
  }

  async clearAuthenObject() {
    let authenJson = await AsyncStorage.getItem('@Session:authenObject')
    if (authenJson) {
      let authenObj = JSON.parse(authenJson)
      this.touchID = authenObj.touchID
      authenObj.isLogined = false
      this.isLogined = false
      await AsyncStorage.setItem(
        '@Session:authenObject',
        JSON.stringify(authenObj),
      )
    }
  }
}
