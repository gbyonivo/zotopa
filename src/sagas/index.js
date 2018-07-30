import { effects } from 'redux-saga';
import { sagas } from './transactionSagas';

export default function* rootSaga() {
  yield [
    effects.call(sagas)
  ];
}