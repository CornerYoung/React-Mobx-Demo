import { observable, computed, action } from "mobx"
import moment from 'moment'

class AppStore {
    @observable time = ''
    @observable todos = []
    @computed get desc() {
        return `${this.time} 还有${this.todos.length}条任务待完成`
    }
    @action addTodo(todo){
        this.todos.push(todo)
    }
    @action deleteTodo() {
        this.todos.pop()
    }
    @action resetTodo() {
        this.todos = []
    }
    @action getNowTime(){
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

const store = new AppStore()

setInterval(()=>{
    store.getNowTime()
},1000)

export default store