'use strict'

import RNSamsungBKS from 'react-native-samsung-bks'

import keyMirror from 'utils/keyMirror'

export const SamsungBKSConstants = keyMirror(
  {
    GET_SEEDHASH_PENDING: null,
    GET_SEEDHASH_SUCCESS: null,
    GET_SEEDHASH_ERROR: null,
    SET_ENABLED: null,
    SET_ERROR: null
  },
  'SAMSUNG_BKS'
)

function getSeedHashPending() {
  return {
    type: SamsungBKSConstants.GET_SEEDHASH_PENDING
  }
}

function getSeedHashSuccess(payload) {
  return {
    type: SamsungBKSConstants.GET_SEEDHASH_SUCCESS,
    payload
  }
}

function getSeedHashError(error) {
  return {
    type: SamsungBKSConstants.GET_SEEDHASH_ERROR,
    error
  }
}

export function setEnabled(payload) {
  return {
    type: SamsungBKSConstants.SET_ENABLED,
    payload
  }
}

export function setError(payload) {
  return {
    type: SamsungBKSConstants.SET_ERROR,
    payload
  }
}

export function getSeedHash() {
  return async dispatch => {
    dispatch(getSeedHashPending())

    return RNSamsungBKS.getSeedHash()
      .then(result => {
        return dispatch(getSeedHashSuccess(result))
      })
      .catch(error => {
        return dispatch(getSeedHashError(error.message))
      })
  }
}
