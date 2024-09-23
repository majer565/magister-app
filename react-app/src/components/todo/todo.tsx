import DeleteIcon from "../icons/DeleteIcon";
import style from "./todo.module.css";

const Todo = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <div className={style.date}>18.03.2024, 17:00</div>
        <div>Zająć się posprzątaniem syfu z discorda (nytrez)</div>
      </div>
      <div className={style.icon}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Todo;
