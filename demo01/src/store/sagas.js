import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import { GET_MY_LIST } from './actionTypes';
import { getListAction } from './actionCreators';

// generator
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // axios.get('https://easy-mock.bookset.io/mock/5eba04bb9d3b075bd03c5142/redux/')
  //   .then((res) => {
  //     const data = res.data;
  //     const action = getListAction(data)
  //     put(action)
  //   })

  const res = yield axios.get('https://easy-mock.bookset.io/mock/5eba04bb9d3b075bd03c5142/redux/')
  const action = getListAction(res.data)
  yield put(action)
}

export default mySaga;