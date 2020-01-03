import axios from 'axios'

export const AuthRequest = {}

AuthRequest.get = (url, params = {}, successCallback, errorCallback) => {
  axios
    .get(url, {
      params,
    })
    .then(async (response) => {
      // console.log('==Request GET Success==', response)
      successCallback(response)
    })
    .catch((error) => {
      // console.log('==Request GET Error==', error)
      errorCallback(error)
    })
}

AuthRequest.post = (url, data = {}, successCallback, errorCallback) => {
  axios
    .post(url, data)
    .then(async (response) => {
      // console.log('==Request POST Success==', response)
      successCallback(response)
    })
    .catch((error) => {
      // console.log('==Request POST Success==', error)
      errorCallback(error)
    })
}

AuthRequest.put = (url, data = {}, successCallback, errorCallback) => {
  axios
    .put(url, data)
    .then(async (response) => {
      // console.log('==Request PUT Success==', response)
      successCallback(response)
    })
    .catch((error) => {
      // console.log('==Request PUT Success==', error)
      errorCallback(error)
    })
}

AuthRequest.delete = (url, data = {}, successCallback, errorCallback) => {
  axios
    .delete(url, data)
    .then(async (response) => {
      // console.log('==Request DELETE Success==', response)
      successCallback(response)
    })
    .catch((error) => {
      // console.log('==Request DELETE Error==', error)
      errorCallback(error)
    })
    .then(() => {})
}

export default AuthRequest
