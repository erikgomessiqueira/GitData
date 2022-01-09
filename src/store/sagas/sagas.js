import {call, put} from 'redux-saga/effects'
import api from '../../services/api'
import { requestSucess, resquestFailed, HandleLoading } from '../action'

export function* load(action){
    yield put(HandleLoading(true))
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
            requestSucess:{
                state: true,
                error:'',
                alert: 'request',
            },
            avatar_url:user.avatar_url,
            bio:user.bio,
            repos
        }))
    } catch (error) {
        yield put(resquestFailed({
            state: false,
            error:error.response.status,
            alert: 'request',
        }))
    }finally{
        yield put(HandleLoading(false))
    }
}