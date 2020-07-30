import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
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
