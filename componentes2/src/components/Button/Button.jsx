import styles from "./Button.module.css";

const Button = ({ texto, conditional, setContador, contador }) => {
  
  return (
    <button
      onClick={()=>{setContador(contador) }}
      style={{ color: conditional ? "#f9f9f9" : "black" }}
      className={styles.btn}
    >
      {texto}
    </button>
  );
};

export default Button;
