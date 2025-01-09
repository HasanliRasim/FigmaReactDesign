import styles from "./Contact.module.scss";

const Contact = ({ title, description, content, image, bgColor }) => {
  return (
    <div className={styles.box} style={{ backgroundColor: bgColor }}>
      <div className={styles.box_info}>
        <p className={styles.box_info_title}>{title}</p>
        <p className={styles.box_info_text}>{description}</p>
        <button className={styles.box_info_btn}>{content}</button>
      </div>
      <div>
        <img className={styles.image} src={image} alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
