import styles from "./Home.module.scss"
import Info from "../../components/Info/Info";
import Card from "../../components/Card/Card";
import Contact from "../../components/Contact/Contact";

const Home = () => {
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

      <div>
      <Info title='Services' description='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'/>
      </div>

      <div className={styles.container}>
        <div className={styles.container_boxes}>
          <Card bgColor='#F3F3F3' title='Search engine optimization' image='./src/assets/search.svg' icon='./src/assets/arrowGreen.svg' textColor='#0F0F0F' titleBgColor='#B9FF66'/>
          <Card bgColor='#B9FF66' title='Pay-per-click advertising' image='./src/assets/payper.svg' icon='./src/assets/arrowGreen.svg' textColor='#0F0F0F' titleBgColor='#FFFFFF'/>
        </div>
        <div className={styles.container_boxes}>
          <Card bgColor='#191A23' title='Social Media Marketing' image='./src/assets/social.svg' icon='./src/assets/arrowWhite.svg' textColor='#FFFFFF' titleBgColor='#FFFFFF'/>
          <Card bgColor='#F3F3F3' title='Email Marketing' image='./src/assets/email.svg' icon='./src/assets/arrowGreen.svg' textColor='#0F0F0F' titleBgColor='#B9FF66'/>
        </div>
        <div className={styles.container_boxes}>
          <Card bgColor='#B9FF66' title='Content Creation' image='./src/assets/content.svg' icon='./src/assets/arrowGreen.svg' textColor='#0F0F0F' titleBgColor='#FFFFFF'/>
          <Card bgColor='#191A23' title='Analytics and Tracking' image='./src/assets/analytics.svg' icon='./src/assets/arrowWhite.svg' textColor='#FFFFFF' titleBgColor='#B9FF66'/>
        </div>
      </div>

      <div>
        <Contact
        title="Let’s make things happen"
        description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
        content="Get your free proposal"
        image="/src/assets/lets.svg"
        bgColor="#f5f5f5"/>
      </div>

      <div className={styles.div}></div>

    </main>
  );
};

export default Home;  
