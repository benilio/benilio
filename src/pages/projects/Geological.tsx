import classes from "./Projects.module.css";

import Image from "../../components/Project/ProjectImage";

import Process from "../../assets/projects/01/process.webp";
import MultipleScreens from "../../assets/projects/01/multiple_screens.webp";

function Geological() {
  return (
    <main className={classes.project}>
      <section className={classes.project__header}>
        <h1>Restoration and Simulation of Geological Models Software</h1>
        <h2>@ MDGeo Team, Tecgraf Institute/PUC-Rio</h2>
        <h3>UI/UX Design, 2019-present</h3>
      </section>
      <div className={classes.project__description}>
        <section>
          <h4>Project Overview</h4>
          <p>
            The MDGeo have an ongoing and exclusive contract with Petrobras on
            the development of a software suite, which includes a Restoration
            and Simulation of Geological Models and a Geomechanical Analysis
            systems.
          </p>

          <p>
            The system consists of an attempt to reconstitute the original
            geometry of the model’s layers, before the occurrence of deformation
            throughout time. Due to the lack of information on the deformation
            mechanisms that took place in the past, different restoration
            techniques are based on geological premises that can be simulated in
            different ways.
          </p>
          <p>
            The application of geological models restoration techniques aims to
            validate wells and seismic data interpretation, provide a better
            understanding of the geohistory and obtain results in terms of these
            models’ deformation measurements concentration.
          </p>
          <p>
            This information helps in the identification of oil systems and,
            thus, the establishment of attractive regions for prospecting. It
            also helps reducing exploration risks.
          </p>
        </section>
        <section>
          <h4>My Contributions</h4>
          <p>
            My main responsibilities in the team was being part of the solutions
            creating sessions for new tools and/or adjustments on previous
            features; create low fidelity screens; build high fidelity
            prototypes for usability testing; handing-in deliverables to
            developers; follow-ups with developers after the tool has been
            launched.
          </p>
          <p>
            Besides that, some of the greatest challenges I would had to face
            some now and then was coming up with a graphical representation of a
            specific geological term, in which I would rely on long talks with
            the geologists and some extensive research.
          </p>
        </section>
      </div>
      <section className="flex flex-col gap-4">
        <Image
          imageSrc={Process}
          imageAltText="Three laptops with different software screens"
        />
        <Image
          imageSrc={MultipleScreens}
          imageAltText="Multiple software screens"
        />
      </section>
      <section>
        <p className="text-center py-16">
          This project is owned by <em>PETROBRAS</em> and{" "}
          <em>Tecgraf/PUC-Rio Institute</em>.<br /> (c) All Rights Reserved.
        </p>
      </section>
    </main>
  );
}

export default Geological;
