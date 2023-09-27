import WorkCard from "@/components/WorkCard";

import styles from "@styles/modules/home.module.scss";

import Geomechanical from "@assets/work/geomechanical-analysis-software/cover.webp";
import Restoration from "@assets/work/restoration-simulation-software/process.webp";

import {FaSquareArrowUpRight} from "react-icons/fa6";
import Link from "next/link";

const Home = () => {
    return (
        <main>
            <div className={styles.hero}>
                <h1 className={styles.hero__intro}>
                    <span className={styles.hero__intro__frstline}>
                    Hey there! I&apos;m <span className={styles.hero__intro__frstline__name}>Benício Oliveira</span>
                    </span>
                    <br/>
                    <span className={styles.hero__intro__scndline}>

                    &mdash; a UI/UX designer &amp; amateur frontend developer.
                    </span>
                </h1>
                <div className={styles.hero__divider}></div>
                <div className={styles.hero__quote}>
                    <p className={styles.hero__quote__motto}>내일 아무도 몰라요</p>
                    <p className={styles.hero__quote__translation}>No one knows tomorrow.</p>
                </div>
                {/*<p>With almost 5 years of experience with </p>*/}
            </div>

            <section id="work" className={styles.work}>
                <h2>Work</h2>
                <div className={styles.work__grid}>
                    <WorkCard imageUrl={Geomechanical}
                              imageAlt={"Cover"} title={"Geomechanical Analysis Software"}
                              type={"UI/UX Design"} pageUrl={"../work/geomechanical-analysis-software"}/>

                    <WorkCard imageUrl={Restoration}
                              imageAlt={"Cover"}
                              title={"Restoration and Simulation of Geological Models Software"}
                              type={"UI/UX Design"} pageUrl={"../work/restoration-simulation-software"}/>
                    <Link href={"/work"} className={styles.work__grid__more}>
                        <span className={styles.work__grid__more__text}>Check more!</span>
                        <FaSquareArrowUpRight className={styles.work__grid__more__icon}/>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
