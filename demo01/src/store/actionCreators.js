import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes';
import axios from 'axios';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemtAction = () => ({
  type: ADD_ITEM,
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {

    axios.get('https://easy-mock.bookset.io/mock/5eba04bb9d3b075bd03c5142/redux/')
      .then((res) => {
        const data = res.data;
        const action = getListAction(data)
        dispatch(action)
      })
  }
}

export const getMyListAction = (data) => ({
  type: GET_MY_LIST,
})