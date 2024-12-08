import styles from "./Footer.module.scss"


const Footer = () => {
  return (
    <div className={styles.div}>
      <footer className={styles.footer}>
      <div className={styles.footer_heading}>
         <div>
            <img src="src/assets/Logo_white.svg" alt="logo"/>
        </div>
        <ul className={styles.footer_heading_ul}>
            <li className={styles.footer_heading_ul_list}><a className={styles.footer_heading_ul_link} href="#">About us</a></li>
            <li className={styles.footer_heading_ul_list}><a className={styles.footer_heading_ul_link} href="#">Services</a></li>
            <li className={styles.footer_heading_ul_list}><a className={styles.footer_heading_ul_link} href="#">Use Cases</a></li>
            <li className={styles.footer_heading_ul_list}><a className={styles.footer_heading_ul_link} href="#">Pricing</a></li>
            <li className={styles.footer_heading_ul_list}><a className={styles.footer_heading_ul_link} href="#">Blog</a></li>
        </ul>
        <div className={styles.footer_heading_icons}>
          <img src="src/assets/linkedin.svg" alt="" />
          <img src="src/assets/facebook.svg" alt="" />
          <img src="src/assets/twitter.svg" alt="" />
        </div>
      </div>
      <div className={styles.footer_description}>
        <div>
          <span className={styles.footer_description_title}>Contact us:</span>
          <p className={styles.footer_description_text}>Email: info@positivus.com</p>
          <p className={styles.footer_description_text}>Phone: 555-567-8901</p>
          <p className={styles.footer_description_text}>Address: 1234 Main St <br />
          Moonstone City, Stardust State 12345</p>
        </div>
        <div className={styles.footer_description_box}>
          <input className={styles.footer_description_box_input} type="text" placeholder="Email" />
          <button className={styles.footer_description_box_button}>Subscribe to news</button>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p className={styles.footer_bottom_text}>© 2023 Positivus. All Rights Reserved.</p>
        <a className={styles.footer_bottom_text} href="">Privacy Policy</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer