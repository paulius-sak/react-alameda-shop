import styles from './filter.module.css'

const Filter = () => {
  return (
    <div className={styles.main}>
        <button className={styles.btn}>Tops</button>
        <div className={styles.space}></div>
        <button className={styles.btn}>Bottoms</button>
        <div className={styles.space}></div>
        <button className={styles.btn}>Sale</button>
    </div>
  )
}

export default Filter