import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes';

const defaultState = {
  inputValue: 'Write Something',
  list: [
    '早7点40分起床',
    '早8点30分吃早餐',
    '下午2点10分开技术例会'
  ]
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

  return state
}