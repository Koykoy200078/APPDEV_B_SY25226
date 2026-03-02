import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from '../reducers/auth';

// Config
const sagaMiddleware = createSagaMiddleware();
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth001'],
};

const authPersistConfig = {
  key: 'auth001',
  storage: AsyncStorage,
  blacklist: [],
};

// Combine Reducers
const rootReducer = combineReducers({
  auth001: persistReducer(authPersistConfig, auth),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware, thunk),
  );

  let persistor = persistStore(store);

  const runSaga = sagaMiddleware.run;

  return { store, persistor, runSaga };
};
