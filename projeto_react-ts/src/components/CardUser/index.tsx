import styles from "./index.module.css";

type CardUserProps = {
  foto: string;
  nome: string;
  cargo: string;
};

const CardUser = ({ foto, nome, cargo }: CardUserProps) => {
  return (
    <div className={styles.card_user}>
      <img src={foto} alt="" />
      <h2>{nome}</h2>
      <span>{cargo}</span>
    </div>
  );
};

export default CardUser;
