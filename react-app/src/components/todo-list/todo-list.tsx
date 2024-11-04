import { useState } from "react";
import { transformDateToString } from "../../utils/todo-list-utils";
import Todo, { TodoDef } from "../todo/todo";
import style from "./todo-list.module.css";

interface TodoListProps {
  todos: TodoDef[];
}

const TodoList = ({ todos }: TodoListProps) => {
  const [todoList, setTodoList] = useState<TodoDef[]>(todos);

  const handleRemove = (id: string) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };

  const handleClick = () => {
    const enteredTodo = prompt("Type your TODO here...");

    if (enteredTodo) {
      const currentDate: string = transformDateToString(new Date());
      const id: string = crypto.randomUUID();
      const todoToAdd: TodoDef = {
        id,
        date: currentDate,
        text: enteredTodo,
      };
      console.log(todoToAdd)
      setTodoList((prev) => ([ ...prev, todoToAdd ]));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.list}>
        {todoList.map((todo, index) => (
          <Todo key={`todo-${index}`} todo={todo} onRemove={handleRemove} />
        ))}
      </div>
      <button className={style.newButton} onClick={handleClick}>
        Add new TODO
      </button>
    </div>
  );
};

export default TodoList;
