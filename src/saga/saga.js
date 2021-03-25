import { call, put, delay, takeEvery} from 'redux-saga/effects';
import pexelApi from '../api/PexelApi';
import { fetchPin, fetchPinSuccess } from '../features/Pin/pinSlice';
import { showLoading, hiddenLoading } from '../features/UiLoading/UiloadingSlice';

function* watchFetchPinAction() { 
    yield put(showLoading());
    const resp = yield call(pexelApi.getCurated, 1000);
    yield put(fetchPinSuccess(resp));
    yield put(hiddenLoading());
}

function* rootSaga() { 
    yield takeEvery(fetchPin.type, watchFetchPinAction);
}

export default rootSaga;