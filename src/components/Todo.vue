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
    <div class="todo-items-grid">
      <ul class="clean-list">
        <li class="todo-items" v-for="todo in todos" :key="todo.text">
          <input class="todo-checkbox"
             id="checkbox"
             type="checkbox"
             v-model="todo.completed"
             @change="deleteTodo(todo)" />
          <label class="todo-item" for="checkbox">{{ todo.text }}</label>
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
      if (this.newTodo !== '') {
        this.todos.push(
          {
            'text': this.newTodo,
            'completed': false,
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

.clean-list {
  list-style: none;
  padding-left: 0;
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
  height: 40px;
  width: 85%;
  border-radius: 45px;
  float: left;
  border: solid lightskyblue 3px;
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
  margin-left: -60px;
  margin-top: -2px;
}

.todo-checkbox {
  margin-right: 10px;
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

}

</style>
