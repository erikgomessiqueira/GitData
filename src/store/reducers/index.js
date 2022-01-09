import {combineReducers} from 'redux'
import {user} from './user'
import {aplication} from './aplication'

export default combineReducers({
    user,
    aplication
})