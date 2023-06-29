import styles from "./Button.module.scss";

function Button({ value, disabled, type, onClick, style }) {
  const styleBtn = styles[`${style}`];
  return (
    <button
      className={styleBtn}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
