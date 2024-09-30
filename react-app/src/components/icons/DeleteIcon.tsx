import style from "./DeleteIcon.module.css";

interface DeleteIconProps {
  onRemove: () => void;
}

const DeleteIcon = ({ onRemove }: DeleteIconProps) => {
  return (
    <button className={style.iconButton} onClick={() => onRemove()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={style.svg}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
};

export default DeleteIcon;
