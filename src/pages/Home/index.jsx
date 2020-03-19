import React, { Component } from 'react';
import { inject,observer} from 'mobx-react'
import store from '../../store';

@inject('store') //把store注入进来
@observer //对注入进来的store进行观察，如果store发生变化，home组件中页相应发生变化

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    handleTodos = (type)=>{
        const { store } = this.props
        switch (type) {
            case 'add':
                store.addTodo('新增一条任务')
                break
            case 'delete':
                store.deleteTodo()
                break
            case 'reset':
                store.resetTodo()
                break
            default :
                return
        }
    }

    render() {
        const {store} = this.props
        return (
            <div>
                <h1>Mobx使用</h1>
                <div>{store.time}</div>
                <button onClick={() => { this.handleTodos('add')}}>添加一条任务</button>
                <button onClick={() => { this.handleTodos('delete') }}>删除一条任务</button>
                <button onClick={() => { this.handleTodos('reset') }}>重置任务列表</button>
                <ul>
                    {
                        store.todos.map((ele, index) => <li key={ele + index}>{ele}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Home;