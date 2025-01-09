import styles from "./Card.module.scss"

 const Card = ({title, image, icon, bgColor, titleBgColor, textColor}) => {
  return (
    <div style={{backgroundColor:`${bgColor}`}} className={styles.box}>
      <div className={styles.box_name}>
        <span style={{backgroundColor:`${titleBgColor}`}} className={styles.box_name_title}>{title}</span>
        <div className={styles.box_name_icon}>
          <img src={icon} alt="img" />
          <p style={{color:`${textColor}`}} className={styles.box_name_icon_text}>Learn more</p>
        </div>
      </div>
      <div className={styles.box_img}>
        <img src={image} alt="img" />
      </div>
    </div>
  )
}

export default Card