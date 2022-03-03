import EncryptedStorage from 'react-native-encrypted-storage';
import { takeLatest, put, call } from 'redux-saga/effects';
// import { apiCall } from '../../util/apiUtil';
// import { serviceUrl } from '../../constants/constants';
import { types } from '../ActionTypes';
import NavigationServices from '../../routing/NavigationServices';

function* dummy(payload) {
    console.log("Inside Saga")
    try {
        yield put({
            type: types.TOGGLE_LOADING,
            payload: true

        });
        yield call(NavigationServices.navigate('Comp2'))

    } catch (error) {
        yield put({
            type: types.TOGGLE_LOADING,
            payload: false
        });
        console.log('error', error)
    }
}



export function* watchGlobalSaga() {
    yield takeLatest(types.DUMMY_SAGA, dummy);
}