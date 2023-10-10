import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { photosReducer } from './reducers/photos-reducer';

// redux store states configuration
const persistConfig = {
    key: 'root',
    storage,
}

const photosConfig = {
    key: 'photos',
    storage,
};

// root reducer configuration & other state configuration
const rootReducer = combineReducers({
    photos: persistReducer(photosConfig, photosReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer;
