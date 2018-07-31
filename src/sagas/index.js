import { all, call } from 'redux-saga/effects';
import { sagas } from './transactionSagas';

export default function* rootSaga() {
  yield all([
    call(sagas)
  ]);
}