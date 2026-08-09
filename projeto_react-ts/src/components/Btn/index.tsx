import styles from "./index.module.css";

type BtnProps = {
  texto: string;
  corDeFundo: string;
};

const Btn = ({ texto, corDeFundo }: BtnProps) => {
  return (
    <button className={styles.btn} style={{ backgroundColor: corDeFundo }}>
      {texto}
    </button>
  );
};

export default Btn;
