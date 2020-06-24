import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  // Faz requisição até a api
  const response = yield call(api.get, `/products/${id}`);

  // Chama outra action para "acessar o reducer"
  yield put(addToCartSuccess(response.data));
}

export default all([
  // 1º parametro é qual ação queremos ouvir
  // 2º parametro é qual action queremos disparar
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
