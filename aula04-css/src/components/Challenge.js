import styles from './Challenge.module.css'

const Challenge = ({title, name, model, color, exchange, year, km, price}) => {
  return (
    <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.info}>
            <p>Nome: {name}</p>
            <p>Modelo: {model}</p>
            <p>Cor: {color}</p>
            <p>Câmbio: {exchange}</p>
            <p>Ano: {year}</p>
            <p>Status: { km > 0 ? "Usado" : "Novo"}</p>
            <p>Preço: R$ {price}</p>
        </div>        
    </div>
  )
}

export default Challenge