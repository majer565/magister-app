import { useState } from "react";
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
  }
  

  return (
    <div className={style.container}>
      <div className={style.list}>
        {todoList.map((todo, index) => (
          <Todo
            key={`todo-${index}`}
            todo={todo}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
