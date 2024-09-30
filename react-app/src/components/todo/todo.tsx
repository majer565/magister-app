import DeleteIcon from "../icons/DeleteIcon";
import style from "./todo.module.css";

export interface TodoDef {
  id: string;
  date: string;
  text: string;
}

interface TodoProps {
  todo: TodoDef;
  onRemove: (id: string) => void;
}

const Todo = ({ todo, onRemove }: TodoProps) => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <div className={style.date}>{todo.date}</div>
        <div>{todo.text}</div>
      </div>
      <div className={style.icon}>
        <DeleteIcon onRemove={() => onRemove(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
