import styles from "@styles/modules/works.module.scss";
import WorkCard from "@/components/WorkCard";

import Restoration from '@assets/work/restoration-simulation-software/process.webp'
import Geomechanical from '@assets/work/geomechanical-analysis-software/cover.webp'
import Graphic from "@assets/work/graphic-design-is-my-passion/cover.webp";
import IHGBI from "@assets/work/ihgbi/cover.webp";

const Work = async () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Work</h1>

            <section className={styles.grid}>
                <WorkCard imageUrl={Geomechanical}
                          imageAlt={"Cover"} title={"Geomechanical Analysis Software"}
                          type={"UI/UX Design"} pageUrl={"../work/geomechanical-analysis-software"}/>

                <WorkCard imageUrl={Restoration}
                          imageAlt={"Cover"}
                          title={"Restoration and Simulation of Geological Models Software"}
                          type={"UI/UX Design"} pageUrl={"../work/restoration-simulation-software"}/>

                <WorkCard imageUrl={IHGBI}
                          imageAlt={"Cover"}
                          title={"IGBI web page"}
                          type={"UI/UX Design"} pageUrl={"../work/ihgbi"}/>

                <WorkCard imageUrl={Graphic}
                          imageAlt={"Cover"}
                          title={"Graphic Design is my Passion"}
                          type={"Graphic Design"} pageUrl={"../work/graphic-design-is-my-passion"}/>
            </section>
        </main>
    );
};

export default Work;
