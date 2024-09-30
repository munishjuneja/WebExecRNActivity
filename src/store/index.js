import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './reducers/userReducer';

// Redux persist configuration
const persistConfig = {
  key: 'root', // Key for the persisted state
  storage: AsyncStorage, // Use AsyncStorage for persistence
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
