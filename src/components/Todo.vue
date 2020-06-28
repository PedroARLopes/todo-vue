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
      <tr class="todo-items" v-for="todo in todos" :key="todo.id">
        <td class="todo-checkbox">
          <input
                 id="checkbox"
                 type="checkbox"
                 v-model="todo.completed"
                 @change="deleteTodo(todo)" />
        </td>
        <td>
          <label class="todo-item" for="checkbox">{{ todo.text }}</label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
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
    }
  },
  methods: {
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

.todo-items{
  margin-top: 5px;
  text-align: left;
  color: slategrey;
}

.todo-item {
  width: 99%;
}

</style>
