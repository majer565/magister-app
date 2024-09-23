import Todo from "../todo/todo";
import style from "./todo-list.module.css";

const TodoList = () => {
  return (
    <div className={style.container}>
      <Todo />
    </div>
  );
};

export default TodoList;
