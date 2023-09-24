import { observable, makeAutoObservable } from 'mobx';

class TodosStore {
  todos = [
    { text: 'Learn CSS', done: false },
    { text: 'Learn JS', done: true },
    { text: 'Learn React', done: false },
    { text: 'Learn Mobx', done: false },
  ]

  constructor() {
    makeAutoObservable(this);
  }

  remove = (itemIndex) => {
    this.todos.splice(itemIndex, 1);
  }

  // how to mutate object in array ?
  makeDone = (itemIndex) => {
    const { done } = this.todos[itemIndex];
    this.todos[itemIndex].done = !done;
  }

  edit = (itemIndex, itemText) => {
    let item = this.todos[itemIndex];
    item.text = itemText;
    this.todos.splice(itemIndex, 1, item);
  }

  get items() {
    return this.todos;
  }
}

export const todosStore = new TodosStore();
