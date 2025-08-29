import styles from "./TarjetaModulo.module.css";

export default function TarjetaModulo({ nombre, descripcion, categoria, variant }) {
  return (
    <div className={`${styles.tarjeta} ${variant ? styles[variant] : ""}`}>
      <div className={styles.encabezado}>
        <h2 className={styles.titulo}>{nombre}</h2>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
      <span className={styles.categoria}>{categoria}</span>
    </div>
  );
}
