import { observable, computed, action } from "mobx";

class AppStore {
    @observable time = '2020'
    @observable todos = []
    @action addTodo(todo){
        this.todos.push(todo)
    }
    @action deleteTodo() {
        this.todos.pop()
    }
    @action resetTodo() {
        this.todos = []
    }
}

const store = new AppStore()

export default store