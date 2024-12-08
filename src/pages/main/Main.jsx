import styles from "./Main.module.scss"


const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_section}>
        <div className={styles.main_section_info}>
          <h1 className={styles.main_section_info_title}>Navigating the <br /> digital landscape <br /> for success</h1>
          <p className={styles.main_section_info_text}>
            Our digital marketing agency helps businesses <br /> grow and succeed
            online through a range of <br /> services including SEO, PPC, social media
            marketing, <br /> and content creation.
          </p>
          <button className={styles.main_section_info_button}>Book a consultation</button>
        </div>
        <div>
          <img src="src/assets/illustration.png" alt="" />
        </div>
      </div>
      <div className={styles.main_cards}>
        <img src="src/assets/amazon.svg" alt="amazon" />
        <img src="src/assets/dribble.svg" alt="dribble" />
        <img src="src/assets/hubspot.svg" alt="hubspot" />
        <img src="src/assets/notion.svg" alt="notion" />
        <img src="src/assets/netflix.svg" alt="netflix" />
        <img src="src/assets/zoom.svg" alt="zoom" />
      </div>
    </main>
  );
};

export default Main;
