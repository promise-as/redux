import React, { Component } from 'react';

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

const data = [
  '早7点40分起床',
  '早8点30分吃早餐',
  '下午2点10分开技术例会'
]

class TodoList extends Component {

  render() {
    return (
      <div style={{ margin: '10px' }}>

        <div>
          <Input
            placeholder='Write Something'
            style={{ width: '250px', marginRight: '10px' }}
          />

          <Button type="primary">增加</Button>
        </div>

        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={data}
            renderItem={item => (
            <List.Item>{item}</List.Item>
            )}
          />
        </div>

      </div>
    );
  }
}

export default TodoList;