import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';

const defaultState = {
  inputValue: 'Write Something',
  list: []
}

export default (state = defaultState, action) => {

  // Reducer 里只能接受 state，不能改变 state
  if(action.type === CHANGE_INPUT){
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    // 改变 input 的值
    newState.inputValue = action.value
    return newState;
  }

  // 添加
  if(action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState;
  }

  // 删除
  if(action.type === DELETE_ITEM){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState;
  }

  // 从后端获取数据
  if(action.type === GET_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.list;
    return newState;
  }

  return state
}