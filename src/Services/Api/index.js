import UserService from './user.service'
const userService = new UserService()

const convertResultFromAPI = (err, res) => {
  let result = {}
  if (err) {
    result = {
      status: 'NG',
      error: err.toString(),
    }
  } else {
    result = {
      status: 'OK',
      response: res,
    }
  }
  return result
}

export default {
  userService: userService,
  convertResultFromAPI: convertResultFromAPI,
}
