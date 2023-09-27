import Image from "next/image";
import Link from "next/link";
import styles from "@styles/modules/work.module.scss";

import Cover from "@assets/work/geomechanical-analysis-software/cover.webp";
import Backgrounds from "@assets/work/geomechanical-analysis-software/backgrounds.webp";
import MultipleScreens from "@assets/work/geomechanical-analysis-software/multiple_screens.webp";

const Work = async () => {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <Image className={styles.cover} src={Cover} alt="Cover image"/>
                <section className={styles.description}>
                    <h1 className={styles.title}>Geomechanical Analysis Software</h1>
                    <div className={styles.description__wrapper}>
                        <p>The system aims to validate wells and seismic data interpretation, provide a better
                            understanding of the geohistory, and obtain results in terms of tension measurement
                            concentration and deformation of these models.</p>
                        <p>Part of a system suite, alongside {" "}
                            <Link href="../work/restoration-simulation-software">
                                Restoration and Simulation of Geological Models Software.
                            </Link>
                        </p>
                        <div className={styles.details}>
                            <div className={styles.details__item}>
                                <h3 className={styles.details__item__title}>Client</h3>
                                <h4 className={styles.details__item__description}>Petrobras</h4>
                            </div>
                            <div className={styles.details__item}>
                                <h3 className={styles.details__item__title}>Team</h3>
                                <h4 className={styles.details__item__description}>
                                    MDGeo @ Tecgraf/PUC-Rio
                                </h4>
                            </div>
                            <div className={styles.details__item}>
                                <h3 className={styles.details__item__title}>Type</h3>
                                <h4 className={styles.details__item__description}>
                                    UI/UX Design
                                </h4>
                            </div>
                            <div className={styles.details__item}>
                                <h3 className={styles.details__item__title}>Year</h3>
                                <h4 className={styles.details__item__description}>
                                    2019-current
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <section className={styles.body}>
                <Image src={Backgrounds} alt="Cover image"/>

                <div className={styles.body__wrapper}>
                    <div className={styles.body__wrapper__spacer}></div>

                    <div className={styles.body__wrapper__text}>
                        <h5 className={styles.body__wrapper__text__title}>My role</h5>
                        <p className={styles.body__wrapper__text__paragraph}>
                            My main responsibilities within the team was being part of the solutions creating sessions
                            for
                            new
                            tools
                            and/or adjustments on previous features; create low fidelity screens; build high fidelity
                            prototypes
                            for usability testing; handing-in deliverables to developers; follow-ups with developers
                            after
                            the
                            tool has been launched.
                        </p>
                        <p className={styles.body__wrapper__text__paragraph}>
                            Coming up
                            with graphical representations of specific geological and engineering terms, iconography and
                            charts.
                        </p>
                    </div>
                </div>

                <Image src={MultipleScreens} alt="Cover image"/>
            </section>

            <footer className={styles.footer}>
                <p>This project is owned by <em>PETROBRAS</em> and <em>Tecgraf Institute/PUC-Rio</em>.</p>
                <p>© All Rights Reserved.</p>
            </footer>
        </main>
    );
};

export default Work;
