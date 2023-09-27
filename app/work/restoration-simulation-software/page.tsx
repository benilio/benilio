import Image from "next/image";
import Link from "next/link";
import styles from "@styles/modules/work.module.scss";

import Cover from "@assets/work/restoration-simulation-software/process.webp";
import Process from "@assets/work/restoration-simulation-software/multiple_screens.webp";
import Iconography from "@assets/work/restoration-simulation-software/iconography.webp";
import Components from "@assets/work/restoration-simulation-software/components.webp";
import LayoutComponents from "@assets/work/restoration-simulation-software/layout_screens.webp";
import LayoutScreens from "@assets/work/restoration-simulation-software/layout_screens.webp";
import LayoutFlows from "@assets/work/restoration-simulation-software/layout_flows.webp";

const Work = async () => {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <Image className={styles.cover} src={Cover} alt="Cover image"/>
                <section className={styles.description}>
                    <h1 className={styles.title}>Restoration and Simulation of Geological Models Software</h1>
                    <div className={styles.description__wrapper}>
                        <p>Due to the lack of information on the deformation mechanisms that
                            took place in the past, different restoration techniques are based on geological premises
                            that can be simulated in different ways.</p>
                        <p>
                            The application of geological models restoration techniques aims to validate wells and
                            seismic data interpretation, provide a better understanding of the geohistory and obtain
                            results in terms of these models’ deformation measurements concentration.
                        </p>
                        <p>Part of a system suite, alongside {" "}
                            <Link href="../work/geomechanical-analysis-software">
                                Geomechanical Analysis Software.
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
                <Image src={Process} alt="Cover image"/>

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
                            with graphical representations of specific geological terms, iconography and charts.
                        </p>
                    </div>
                </div>

                <Image src={Iconography} alt="Cover image"/>
                <Image src={Components} alt="Cover image"/>
                <Image src={LayoutComponents} alt="Cover image"/>
                <Image src={LayoutScreens} alt="Cover image"/>
                <Image src={LayoutFlows} alt="Cover image"/>

                {/*<div className={styles.body__wrapper}>*/}
                {/*    <div className={styles.body__wrapper__spacer}></div>*/}

                {/*    <div className={styles.body__wrapper__text}>*/}
                {/*        <p className={styles.body__wrapper__text__paragraph}>*/}
                {/*            I was also responsible for the documentation of the Design System and organization of the*/}
                {/*            files within the Figma space.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>

            <footer className={styles.footer}>
                <p>This project is owned by <em>PETROBRAS</em> and <em>Tecgraf Institute/PUC-Rio</em>.</p>
                <p>© All Rights Reserved.</p>
            </footer>
        </main>
    );
};

export default Work;
