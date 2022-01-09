import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';

import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import rootReducer from './reducers/index'
import rootSaga from './sagas/rootSaga';

const persistConfig={
    key: 'root',
    storage: AsyncStorage,
    blacklist:["aplication"]
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer) 

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export {store, persistor};