import { call } from 'redux-saga/effects';
import { sagas } from './transactionSagas';

export default function* rootSaga() {
  yield [
    call(sagas)
  ];
}