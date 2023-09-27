import Image from "next/image";
import styles from "@styles/modules/about.module.scss";

import {FaLocationDot} from "react-icons/fa6";

import Picture from "@assets/cover.jpg";

const About = () => {
    return (
        <main>
            <h1>About me</h1>
            <section className={styles.main}>
                <Image className={styles.image} src={Picture} alt="mine"/>
                <div className={styles.main__text}>
                    <div className={styles.main__text__header}>
                        <h1>Hoy! I&apos;m Benício Oliveira, aka <span
                            className={styles.main__text__header__name}>Beniy</span>.</h1>
                        <h3 className={styles.main__text__header__location}><FaLocationDot
                            className={styles.main__text__header__location__icon}/> Rio de Janeiro, Brazil.</h3>

                    </div>
                    <p>As a child I was very curious in understanding how things worked and &quot;how they were&quot;, I
                        always
                        had a million questions going on my mind. So it went from &quot;how does a clock
                        work?&quot; to &quot;how do
                        people that speaks different languages than us understands us?&quot; to the famous &quot;where
                        do we come
                        from? where do we go?&quot;.</p>
                    <p>This need for understanding the world moved me to tinker with every broken thing that came into
                        my way and trying to understand what other people were thinking that would cause then to act a
                        certain way or do something or not.</p>
                    <p>With this mindset, I pursued design as a way to connect with people and find the answers to my
                        questions, learning and researching are my driving fuels to achieve my goals, always. I look
                        forward for being part of collaborative environments and exchanging knowledge and experiences
                        with other people!</p>
                </div>
            </section>

            {/*<section>*/}
            {/*    <h1>Gallery</h1>*/}
            {/*    <p>Just a small collection of photos I took and really liked. I'm not always taking photos, but I really*/}
            {/*        like and appreciate them a lot.</p>*/}
            {/*    <p>So, here are some of my favorites!</p>*/}
            {/*</section>*/}
        </main>
    );
};

export default About;
