import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}