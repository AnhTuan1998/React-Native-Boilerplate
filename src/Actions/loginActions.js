import { INIT_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERROR } from './types'
import { userConnect, userConnectTouchId } from '../services/user'

export const initLogin = () => {
  return { type: INIT_LOGIN }
}
export const clearError = () => {
  return { type: CLEAR_ERROR }
}

export const userLogin = (userPhone, userPassword, device) => {
  return dispatch => {
    return userConnect(userPhone, userPassword, device)
      .then(user => loginSuccess(dispatch, user))
      .catch(error => loginFail(dispatch, error?.message))
  }
}
export const userLoginTouchID = (userPhone, userPassword, device) => {
  return dispatch => {
    return userConnectTouchId(userPhone, userPassword, device)
      .then(user => loginSuccess(dispatch, user))
      .catch(error => loginFail(dispatch, error?.message))
  }
}
export const userLoginSession = ({ userPhone }) => {
  return dispatch => {
    return userConnect(userPhone)
      .then(user => loginSuccess(dispatch, user))
      .catch(error => loginFail(dispatch, error))
  }
}
export const validateError = err => {
  return dispatch => {
    return loginFail(dispatch, err)
  }
}
const loginFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: error,
  })
}

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  })
}
