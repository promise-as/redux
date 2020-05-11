import React, { Component } from 'react';

import store from './store';
import { changeInputAction, addItemtAction, deleteItemAction } from './store/actionCreators';

import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    // 订阅
    store.subscribe(this.storeChange)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        addItem={this.addItem}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }

  storeChange() {
    this.setState(store.getState())
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  addItem() {
    const action = addItemtAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    // console.log(index, 111);

    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;