import Image from "next/image";
import styles from "@styles/modules/work.module.scss";

import Cover from "@assets/work/ihgbi/cover.webp";
import Highlight from "@assets/work/ihgbi/highlight.webp";
import MultipleScreens from "@assets/work/ihgbi/multiple_screens.webp";

const Work = async () => {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <Image className={styles.cover} src={Cover} alt="Cover image"/>
                <section className={styles.description}>
                    <h1 className={styles.title}>IHGBI Web page</h1>
                    <div className={styles.description__wrapper}>
                        <p>IHGBI (Instituto Histórico e Geográfico da Baixada de Irajá) is a collective whose focus is
                            to value the history, identity, memory and heritage of the Irajá neighborhood.</p>
                        <p>As part of the collective&apos;s activities, besides participating in local events and
                            promoting
                            talks and diverse multimedia projects, the members have been publishing an online version of
                            a journal with the many articles written by the members and collaborators.</p>
                        <p>Made with <a href="https://br.linkedin.com/in/carvalho-nelson">Nelson Carvalho</a>, one of
                            the members of the collective and a fellow designer.</p>
                        <div className={styles.details}>
                            <div className={styles.details__item}>
                                <h3 className={styles.details__item__title}>Client</h3>
                                <h4 className={styles.details__item__description}>IHGBI</h4>
                            </div>
                            <div className={styles.details__item}>
                                <h3 className={styles.details__item__title}>Team</h3>
                                <h4 className={styles.details__item__description}>
                                    Nelson Carvalho
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
                                    2020
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <section className={styles.body}>
                <Image src={Highlight} alt="Cover image"/>

                <div className={styles.body__wrapper}>
                    <div className={styles.body__wrapper__spacer}></div>

                    <div className={styles.body__wrapper__text}>
                        <h5 className={styles.body__wrapper__text__title}>My role</h5>
                        <p className={styles.body__wrapper__text__paragraph}>
                            Worked from the bottom-up to structure and design of what would be the IHGBI&apos;s new web
                            page,
                            which would include all information about the collective&apos;s projects and access to their
                            works in one platform.
                        </p>
                        <p className={styles.body__wrapper__text__paragraph}>
                            From the structural diagram to the making of the wireframes, prototype and final product,
                            both of us worked in unison to apply the newest Visual Identity of the collective in a new
                            product that would be able to portray the group&apos;s essence and meaning, while
                            centralizing
                            everything in one place.
                        </p>
                    </div>
                </div>

                <Image src={MultipleScreens} alt="Cover image"/>
            </section>

            {/*<footer className={styles.footer}>*/}
            {/*    <p>Oh! Such empty. Nothing to see here.</p>*/}
            {/*</footer>*/}
        </main>
    );
};

export default Work;
