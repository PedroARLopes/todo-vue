import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        id_counter: 0,
        todos: [],
        newTodo: "",
        hovering: {},
    },
    getters: {
        getTodos: state => {
            return state.todos;
        },
    },
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        },
        addTodo(state, todo) {
            if (todo === "") {
                return;
            }
            state.id_counter++;
            state.todos.unshift(
                {
                    id:  state.id_counter,
                    text:  todo,
                    completed: false,
                }
            );
        },
        deleteTodo(state, todo) {
            state.todos.splice(state.todos.indexOf(todo), 1);
        },
        checkTodo(state, todo) {
            let index = state.todos.indexOf(todo);
            this.state.todos.splice(index, 1);
            if (todo.completed) {
                state.todos.push(todo);
            } else {
                state.todos.unshift(todo);
            }
        }
    },
});

store.subscribe((mutation, state) => {
   localStorage.setItem('store', JSON.stringify(state));
});

export default store;