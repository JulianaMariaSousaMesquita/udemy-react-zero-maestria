import styles from './Title.module.css'

const Title = () => {
  return (
    <div>
        <h1 className={styles['my-title']}> Título CSS Modules </h1>
        <h1 className={styles.my_title}> Título CSS Modules </h1>
    </div>
  )
}

export default Title