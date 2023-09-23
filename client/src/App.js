import { observer } from 'mobx-react-lite';
import { todosStore } from './TodosStore';
import TodoItem from './TodoItem';

const App = observer(() => {
  const items = todosStore.items;
  const itemsRendered = items.map((todo, index) => {
    const edit = (text) => todosStore.edit(index, text);
    const remove = () => todosStore.remove(index);
    const done = () => todosStore.makeDone(index);
    const actionProps = { edit, remove, done };
    return (
      <TodoItem item={todo} {...actionProps} />
    );
  });
  const style = {
    marginBottom: "5px"
  };
  const onClick = () => {
    fetch('/api/send')
      .then(res => res.json())
      .then(value => alert(value.value));
  }
  return (
    <>
      <button onClick={onClick} style={style}>Send smth</button>
      {itemsRendered}
    </>
  )
});

export default App;
