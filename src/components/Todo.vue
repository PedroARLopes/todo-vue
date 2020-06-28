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
    <div>
      <ul class="clean-list">
        <li class="todo-items" v-for="(todo, index) in todos" :key="todo.index">
          <input class="todo-checkbox"
                 type="checkbox"
                 v-model="todos"
                 id="checkbox"
                 @change="deleteTodo(index)" />
          <label class="todo-item" for="checkbox">{{ todo }}</label>
        </li>
      </ul>
    </div>
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
      todos: [],
      newTodo: "",
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo !== "") {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  position: center;
  border: lightskyblue solid 2px;
  padding: 10px;
  display: inline-block;
  font-family: "Roboto Mono Medium for Powerline";
}

.clean-list {
  list-style: none;
}

.new-todo {
  display: inline-block;
}

.new-todo:after {
  content: "";
  display: table;
  clear: both;
}

.todo-input {
  font-size: 20px;
  padding: 10px 10px 0px 10px;
  height: 40px;
  width: 300px;
  border-radius: 45px;
  border-right: 0;
  float: left;
}

.todo-input::placeholder {
  font-size: 20px;
  font-style: italic;
  font-stretch: expanded;
}

.todo-input:focus {
  outline: none;
}

.todo-checkbox {
  margin-right: 10px;
}

.add-todo-image {
  width: 58px;
  height: 58px;
  float: left;
  margin-left: -54px;
  margin-top: -2px;
}

.todo-items{
  margin-topstuff: 5px;
  width: 200px;
  background-color: azure;
  text-align: left;
  list-style-position: inside;
  color: dimgrey;
}

.todo-item {
  margin-top: 5px;
  display: inline-block;
  background-color: azure;
  text-align: left;
  text-align: left;
  list-style-position: inside;
}

</style>
