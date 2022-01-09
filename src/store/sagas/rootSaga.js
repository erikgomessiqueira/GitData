import {all, takeLatest} from 'redux-saga/effects'
import {requestLoad} from '../action'
import {load} from './sagas'

export default function* rootSaga(){
    return yield all([
        takeLatest('REQUEST_LOAD', load)
    ])
}