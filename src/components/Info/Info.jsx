import styles from "./Info.module.scss"


const Info = ({title, description}) => {
  return (
    <div className={styles.box}>
      <span className={styles.text}>{title}</span>
      <p className={styles.content}>{description}</p>
    </div>
  )
}

export default Info