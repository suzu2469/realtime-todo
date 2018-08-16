<template>
  <div class="container">
    <table class="table">
      <thead>
        <th>Name</th>
        <th>Operation</th>
      </thead>
      <tbody>
        <tr v-for="(todo, key) in todos" :key="key">
          <td class="todo-name">{{ todo.name }}</td>
          <td><button class="button is-small is-danger">Remove</button></td>
        </tr>
      </tbody>
    </table>
    <div class="field has-addons new-todo">
      <div class="control">
        <input class="input" type="text" v-model="todo.name" >
      </div>
      <div class="control">
        <button class="button is-primary" @click="add" @keyup.enter="add">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import firestore from './plugins/firestore.js'

export default {
  firestore() {
    return {
      todos: firestore.collection("todos")
    };
  },
  data: () => ({
    todo: {
      name: ""
    }
  }),
  methods: {
    add() {
      this.$firestore.todos
        .add(this.todo)
        .then(() => (this.todo = { name: "" }));
    },
    remove(e) {
      this.$firestore.todos.doc(e[".key"]).delete();
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 26px;
}

.todo-list > li{
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.todo-list .button.is-danger {
  margin-left: 16px;
}

.new-todo {
  margin-top: 36px;
}

.todo-name {
  min-width: 400px;
}

</style>
