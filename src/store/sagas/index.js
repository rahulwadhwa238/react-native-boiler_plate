import { all, fork } from 'redux-saga/effects'
import { watchGlobalSaga } from './globalSaga';

export function* rootSaga() {
    yield all([
        fork(watchGlobalSaga),
    ]);
};
