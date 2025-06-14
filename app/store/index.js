import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from 'app/reducers';

/**
 * Redux Setting
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 100000,
};

let middleware = [thunk];
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export {store, persistor};
