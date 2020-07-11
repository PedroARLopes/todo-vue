<template>
  <div class="container">
    <h1>TODO App</h1><br/>
    <div class="new-todo">
      <input class="todo-input"
             v-model="newTodo"
             v-on:keyup.enter="addTodo"
             placeholder="add new todo">
      <img class="add-todo-image" @click="addTodo" src="../assets/add.png"/>
    </div>
    <table class="todo-items-grid">
      <transition-group v-on:leave="leave" v-bind:css="false">
        <tr class="todo-item-row" v-for="todo in todos" :key="todo.id"  @mouseover="hovering = todo" @mouseleave="hovering = {}">
          <td class="todo-checkbox">
            <input
                   id="checkbox"
                   type="checkbox"
                   v-model="todo.completed"
                   @change="checkTodo(todo)" />
          </td>
          <td>
            <label v-bind:class="[todo.completed ? 'todo-item-completed' : 'todo-item']" for="checkbox">{{ todo.text }}</label>
          </td>
          <td class="todo-item-delete">
            <img class="delete-todo-image"
                 v-if="todo.completed && hovering.id === todo.id"
                 @click="deleteTodo(todo)"
                 src="../assets/delete.png"
            />
          </td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'Todo',
  props: {
    msg: String
  },
  data: function() {
    return {
      id_counter: 0,
      todos: [],
      newTodo: "",
      hovering: {},
    }
  },
  methods: {
    leave(el, done) {
      Velocity(el, {fontSize: '50%', opacity: 0}, {duration: 500})
      Velocity(el, {height: 0}, { complete: done })
    },
    addTodo() {
      if (this.newTodo !== '') {
        this.id_counter++;
        this.todos.unshift(
          {
            id: this.id_counter,
            text: this.newTodo,
            completed: false,
          }
        );
        this.newTodo = '';
      }
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    checkTodo(todo) {
      // This is so the delete icon does not show when checking the todo
      this.hovering = {};

      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      if (todo.completed) {
        this.todos.push(todo);
      } else {
        this.todos.unshift(todo);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  border: lightskyblue solid 2px;
  padding: 10px;
  display: inline-block;
  font-family: "Roboto Mono Medium for Powerline";
}

.new-todo {
  display: inline-block;
  width: 50%;
}

.new-todo:after {
  content: "";
  display: table;
  clear: both;
  width: 70%;
}

.todo-input {
  font-size: 20px;
  padding: 10px 60px 5px 20px;
  height: 60px;
  width: 100%;
  border-radius: 45px;
  float: left;
  border: solid lightskyblue 3px;
  box-sizing: border-box;
}

.todo-input::placeholder {
  font-size: 20px;
  font-style: italic;
  font-stretch: expanded;
  margin-right: 55px;
}

.todo-input:focus {
  outline: none;
}

.add-todo-image {
  width: 65px;
  height: 65px;
  float: left;
  margin-left: -61px;
  margin-top: -2px;
  position: absolute;
}

.todo-checkbox {
  width: 1%;
}

.todo-items-grid{
  display: table;
  margin: 0 auto;
  width: 50%;
}

.todo-item-row{
  margin-top: 5px;
  text-align: left;
  color: slategrey;
  transition: all 1s;
  display: table;
}

.todo-item {
  width: 95%;
}

.todo-item-completed {
  width: 95%;
  text-decoration: line-through;
  font-style: italic;
  color: transparent;
  text-shadow: 0 0 3px rgba(0,0,0,0.5);
}

.todo-item-delete {
  width: 4%;
  vertical-align: middle;
  text-align: center;
}

.delete-todo-image {
  transition: right;
  width: 70%;
}

</style>
