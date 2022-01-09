import {call, put} from 'redux-saga/effects'
import api from '../../services/api'
import { requestSucess, resquestFailed } from '../action'

export function* load(action){
    console.log(action)
    try {
        const responseUserData = yield call(api.get,`users/${action.payload.login}`)
        const responseRepository = yield call(api.get,`users/${action.payload.login}/repos`)

        const user = responseUserData.data
        const  repos = (responseRepository.data).map((item)=>{
            return {
                id: item.id, 
                name: item.name, 
                language:item?.language || null,
                license: item?.license?.name || null
            }
        })
        yield put(requestSucess({
            name:user.name,
            login:user.login,
            avatar_url:user.avatar_url,
            bio:user.bio,
            repos
        }))
    } catch (error) {
        console.warn(error)
        yield put(resquestFailed())
    }
}