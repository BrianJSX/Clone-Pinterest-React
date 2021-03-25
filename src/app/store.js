import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import pinReducer from '../features/Pin/pinSlice';
import uiLoadingReducer from '../features/UiLoading/UiloadingSlice';
import createSagaMiddleware from 'redux-saga';
import saga from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const devMode = process.env.NODE_ENV === 'development';



export default configureStore({
  reducer: {
    pins: pinReducer,
    uiLoading: uiLoadingReducer,
  },
  middleware,
  devTools: devMode,
});

sagaMiddleware.run(saga);



