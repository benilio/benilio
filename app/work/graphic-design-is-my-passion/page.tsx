import Image from "next/image";
import styles from "@styles/modules/work.module.scss";

import Cover from "@assets/work/graphic-design-is-my-passion/cover.webp";
import Blaradithe from "@assets/work/graphic-design-is-my-passion/blaradithe.webp";
import Boiling from "@assets/work/graphic-design-is-my-passion/boiling.webp";
import Cold from "@assets/work/graphic-design-is-my-passion/cold.webp";
import Jupiter from "@assets/work/graphic-design-is-my-passion/jupiter.webp";
import NelsonPorNelson from "@assets/work/graphic-design-is-my-passion/nelson-por-nelson.webp";
import UndergroundArchives from "@assets/work/graphic-design-is-my-passion/underground-archives.webp";
import Warm from "@assets/work/graphic-design-is-my-passion/warm.webp";

const Work = async () => {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <Image className={styles.cover} src={Cover} alt="Cover image"/>
                <section className={styles.description}>
                    <h1 className={styles.title}>Graphic Design is my Passion</h1>
                    <div className={styles.description__wrapper}>
                        <p>Some random works done over the years, as quick Freelance projects or just for fun.</p>
                        <div className={styles.details}>
                            <div className={styles.details__item}>
                                <h3 className={styles.details__item__title}>Type</h3>
                                <h4 className={styles.details__item__description}>
                                    Graphic Design
                                </h4>
                            </div>
                            <div className={styles.details__item}>
                                <h3 className={styles.details__item__title}>Year</h3>
                                <h4 className={styles.details__item__description}>
                                    2016-2020 (to be updated)
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <section className={`${styles.body} ${styles.grid}`}>
                <Image src={Blaradithe} alt="Cover image"/>
                <Image src={UndergroundArchives} alt="Cover image"/>
                <Image src={NelsonPorNelson} alt="Cover image"/>
                <Image src={Jupiter} alt="Cover image"/>
                <Image src={Cold} alt="Cover image"/>
                <Image src={Warm} alt="Cover image"/>
                <Image src={Boiling} alt="Cover image"/>
            </section>
        </main>
    );
};

export default Work;
