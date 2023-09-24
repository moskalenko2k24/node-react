import { observer } from 'mobx-react-lite';
import { todosStore } from './TodosStore';
import TodoItem from './TodoItem';

const TodoItems = observer(() => {
  const items = todosStore.items;
  return items.map((todo, index) => {
    const edit = (text) => todosStore.edit(index, text);
    const remove = () => todosStore.remove(index);
    const done = () => todosStore.makeDone(index);
    const actionProps = { edit, remove, done };
    return (
      <TodoItem item={todo} {...actionProps} />
    );
  });
});

export default TodoItems;
