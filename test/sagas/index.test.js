import { call } from 'redux-saga/effects';
import rootSaga from '../../src/sagas';
import { sagas } from '../../src/sagas/transactionSagas';

describe('Root Saga', () => {
  it('Root Saga should call all saga modules', () => {
    const gen = rootSaga();
    const actual = [
      gen.next(),
      gen.next()
    ];
    const expected = [
      { done: false, value: [call(sagas)] },
      { done: true }
    ];
    expect(actual).toEqual(expected);
  });
});