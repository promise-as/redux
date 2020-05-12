const defaultState = {
  inputValue: 'HBJ',
  list: []
}

export default (state = defaultState, action) => {

  if (action.type === 'change_input') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'add_item') {

    let newState = JSON.parse(JSON.stringify(state))

    // 判断输入框是否为空
    if (!newState.inputValue) {
      alert('请输入内容')
    } else {
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    }
  }

  if (action.type === 'delete_item') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}