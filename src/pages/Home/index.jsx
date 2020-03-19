import React, { Component } from 'react';
import { inject,observer} from 'mobx-react'

@inject('store') //把store注入进来
@observer //对注入进来的store进行观察，如果store发生变化，home组件中页相应发生变化

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        const {store} = this.props
        return (
            <div>
                <h1>Mobx使用</h1>
                <div>{store.time}</div>
            </div>
        );
    }
}

export default Home;