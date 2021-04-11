import { call, put, delay, takeEvery, takeLatest} from 'redux-saga/effects';
import pexelApi from '../api/PexelApi';
import { fetchPin, fetchPinSuccess, fetchPinSearchSuccess, fetchPinSearch } from '../features/Pin/pinSlice';
import { showLoading, hiddenLoading } from '../features/UiLoading/UiloadingSlice';

function* watchFetchPinAction() {
    yield put(showLoading());
    const resp = yield call(pexelApi.getCurated, 2000);
    console.log(resp);
    yield put(fetchPinSuccess(resp));
    yield delay(2000);
    yield put(hiddenLoading());
}

function* watchFetchPinSearchAction({payload}) {
    yield delay(1000);
    if(payload !== "") {
        yield put(showLoading());
        const resp = yield call(pexelApi.searchParams, payload , 80);
        yield put(fetchPinSearchSuccess(resp));
        yield delay(1000);
        yield put(hiddenLoading());
    } else { 
        yield watchFetchPinAction();
    }
    return 0;
}

function* rootSaga() { 
    yield takeEvery(fetchPin.type, watchFetchPinAction);
    yield takeLatest(fetchPinSearch.type, watchFetchPinSearchAction);
}

export default rootSaga;