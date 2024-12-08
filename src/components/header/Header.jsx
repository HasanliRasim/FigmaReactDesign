import styles from "./Header.module.scss"


const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <img src="src/assets/Logo.svg" alt="logo"/>
        </div>
        <ul className={styles.header_ul}>
            <li className={styles.header_ul_list}><a className={styles.header_ul_link} href="#">About us</a></li>
            <li className={styles.header_ul_list}><a className={styles.header_ul_link} href="#">Services</a></li>
            <li className={styles.header_ul_list}><a className={styles.header_ul_link} href="#">Use Cases</a></li>
            <li className={styles.header_ul_list}><a className={styles.header_ul_link} href="#">Pricing</a></li>
            <li className={styles.header_ul_list}><a className={styles.header_ul_link} href="#">Blog</a></li>
            <button className={styles.header_ul_button}>Request a quote</button>
        </ul>
    </header>
  )
}
export default Header