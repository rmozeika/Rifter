/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { types, getConfig, } from './actions'
import { setConfig } from './src/constants/ActionTypes';

es6promise.polyfill()

function * initConfigSaga () {
  yield take(types.initConfig)
  yield  data = call(loadDataSaga)
  yield put = put(setConfig(data));
  // yield put(setConfigSuccess(config));
  // while (true) {
  //   yield put(tickClock(false))
  //   yield delay(1000)
  // }
}
console.log(getConfig)
function * loadDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * rootSaga () {
  yield all([
    call(runClockSaga),
    takeLatest(Actions.fetch, loadDataSaga)
  ])
}

export default rootSaga
