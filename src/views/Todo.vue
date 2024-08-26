<template>
  <div class="todo-app">

    <div class="task-lists">
    <!--
    <h1>To Do</h1>
    <h2>All tasks [original array]</h2>
        <li class="toDoElement" v-for="task in tasks" :key="'el-' + task.name">
          <input type="checkbox">
          {{ task.name }} - {{ task.done }}
          <button class="remove" @click="removeTask(task.name)">Remove</button>
        </li>
  -->
    <h2>To Do</h2>
        <li class="toDoElement urgent" v-for="task in priorityTasks" :key="'pr-' + task.name">
          <input type="checkbox" v-model="task.done">
          {{ task.name }}
          <button class="remove" @click="removeTask(task.name)"><i class="fas fa-trash-alt"></i></button>
          <button @click="task.priority = !task.priority"><i class="fas fa-star"></i></button>
        </li>


        <li class="toDoElement" v-for="task in normieTasks" :key="'td-' + task.name">
          <input type="checkbox" v-model="task.done">
          {{ task.name }}
          <button class="remove" @click="removeTask(task.name)"><i class="fas fa-trash-alt"></i></button>
        <button @click="task.priority = !task.priority"><i class="far fa-star"></i></button>
        </li>

    <h2>Done ( {{ doneTasks.length }} )</h2>
        <li class="toDoElement completed" v-for="task in doneTasks" :key="'c-' + task.name">
          <button class="restore" @click="task.done = !task.done"><i class="fas fa-trash-restore-alt"></i></button>
          <p>{{ task.name }} <button class="remove" @click="removeTask(task.name)"><i class="fas fa-trash-alt"></i></button></p>
        </li>
  </div>


    <footer>
      <div class="content">
        <button class="priority" v-on:click="togglePriority">
          <span v-show="newPriority"><i class="fas fa-star"></i></span>
          <span v-show="!newPriority"><i class="far fa-star"></i></span>
        </button>
        <input v-model="newtask" type="text" placeholder="New task">
        <button class="add" @click="addTask();"><i class="fas fa-plus-circle"></i></button>
      </div>
    </footer>


  </div>
</template>

<script>
export default {
  name: 'ToDoApp',
  data() {
    return {
      newtask: '',
      newPriority: false,
      tasks: [
        {name: 'Something to do', done: false, priority: false},
        {name: 'Todoooos', done: false, priority: true},
        {name: 'Things', done: false, priority: false},
        {name: 'Kooo', done: false, priority: true},
        {name: 'Taketa', done: true, priority: true},
      ],
    }
  },
  methods: {
    addTask(){
      if (this.newtask.length < 1)
        return;
      
      this.tasks.push(
        {
          name: this.newtask,
          done: false,
          priority: this.newPriority,
        }
      )
      this.newtask = '',
      this.newPriority = false
    },
    removeTask(cosa){
      let i = this.tasks.findIndex(task => task.name === cosa)
      this.tasks.splice(i, 1)
    },
    togglePriority() {
      this.newPriority = !this.newPriority
    },
  },
  computed: {
    doneTasks() {
      return this.tasks.filter((task) => {
        return task.done === true
      })
    },
    countTasks(){
      return this.doneTasks.length
    },
    priorityTasks() { //return (Alltasks-doneTasks) where task.priority == true
      return this.tasks.filter((task) => {
        return (task.priority === true) && (task.done === false)
      })
    },
    normieTasks() { //return Alltasks-doneTasks-priorityTasks
      return this.tasks.filter((task) => {
        return (task.priority === false) && (task.done === false)     
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-app {
  margin: 0;
  padding: 0;
  min-width: 400px;
  .task-lists {
    margin-bottom: 200px;
    margin: 30px;
    .toDoElement{
      padding: 15px;
      margin: 5px;
      border-radius: 15px;
      background: rgb(140, 173, 195);
      color: white;
      text-align: left;
      list-style: none;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      button {
        float: right;
        border: none;
        background: none;
      }
    }
    .urgent {
      background: rgb(189, 130, 127);
    }
    .completed {
      background: rgba(131, 135, 136, 0.521);
      text-decoration-line: line-through;
      p{
        margin: 0;
        margin-left: 30px;
        padding: 0;
      }
    }
    .restore {
      position: absolute;
      background: none;
      border: none;
    }
  }

  footer {
    margin: 0;
    padding: 30px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: inline;
    .content {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
      border-radius: 10px;  
      input {
        padding: 10px;
        width: auto;
        border: none;
        flex-grow: 1;
      }
      button {
        width: 50px;
        padding: 10px;
        background: rgb(85, 163, 216);
        border: none;
        > * {
          color: white;
        }
      }
      .priority {
        border-radius: 10px 0 0 10px;
      }
      .add {
        border-radius: 0 10px 10px 0;
      }
    }
  }
}
</style>
