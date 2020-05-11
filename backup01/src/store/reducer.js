const defaultState = {
  inputVlaue: 'Write Something',
  list: [
    '早7点40分起床',
    '早8点30分吃早餐',
    '下午2点10分开技术例会'
  ]
}

export default (state = defaultState, action) => {
  // console.log(state, action);

  // Reducer 里只能接受 state，不能改变 state
  if (action.type === 'changeInput') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputVlaue = action.value
    return newState
  }

  if (action.type === 'addItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputVlaue)
    newState.inputVlaue = ''
    return newState
  }

  if (action.type === 'deleteItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}