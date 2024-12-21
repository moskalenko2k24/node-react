import { makeAutoObservable, runInAction } from 'mobx';

class TodosStore {
  todos = []

  constructor() {
    makeAutoObservable(this);
  }

  load = () => {
    fetch('/api/todo')
      .then(res => res.json())
      .then(res => runInAction(() => {
        this.todos = res;
      }));
  }

  remove = (itemIndex) => {
    fetch('/api/todo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ itemIndex }),
    }).then(res => {
      if (res.ok)
        runInAction(() => {
          this.todos.splice(itemIndex, 1);
        });
    });
  }

  makeDone = (itemIndex) => {
    fetch('/api/todo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ itemIndex }),
    }).then(res => {
      if (res.ok && res.status === 200)
        runInAction(() => {
          const { done } = this.todos[itemIndex];
          this.todos[itemIndex].done = !done;
        });
    })
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
