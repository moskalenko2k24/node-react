import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './TodoItem.module.css';

// DON'T FORGET TO USE observer HERE TOO
const TodoItem = observer((props) => {
  const { item } = props;
  const { edit, remove, done } = props;
  const textClassName = item.done ? styles.done : '';

  const [isEditable, setIsEditable] = useState(false);
  // const [text, setText] = useState(item.text);

  const onEdit = (e) => {
    if (isEditable)
      edit(e.target.value);
    setIsEditable(prev => !prev);
  }

  return (
    <div className={styles.todoItem}>
      <button>Edit</button>
      <button onClick={remove}>Remove</button>
      <button onClick={done}>Done</button>
      {
        isEditable ?
          <input type="text" value={item.text} onChange={onEdit} /> :
          <p className={textClassName}>{item.text}</p>
      }
    </div>
  );
});

export default TodoItem;
