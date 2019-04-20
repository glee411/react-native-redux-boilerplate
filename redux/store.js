import { compose, createStore, applyMiddleware } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducer/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = async () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
