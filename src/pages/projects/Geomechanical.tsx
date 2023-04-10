import "../../styles/Projects.css";

import Image from "../../components/Project/ProjectImage";

import Backgrounds from "../../assets/projects/geomechanical/backgrounds.webp";
import MultipleScreens from "../../assets/projects/geomechanical/multiple_screens.webp";

function Geomechanical() {
  return (
    <main className="project">
      <section className="project__header">
        <h1>Integrated Geomechanical Analysis Software</h1>
        <h2>@ MDGeo Team, Tecgraf Institute/PUC-Rio</h2>
        <h3>UI/UX Design, 2019-present</h3>
      </section>
      <div className="project__description">
        <section>
          <h4>Project Overview</h4>
          <p>
            The MDGeo have an ongoing and exclusive contract with Petrobras on
            the development of a software suite, which includes a Restoration
            and Simulation of Geological Models and a Geomechanical Analysis
            systems.
          </p>

          <p>
            The system uses, among others, the finite element method for process
            simulations in structural geology and 2D and 3D geotectonic. The
            system aims to validate wells and seismic data interpretation,
            provide a better understanding of the geohistory, and obtain results
            in terms of tension measurement concentration and deformation of
            these models. This information helps in the identification of oil
            systems and, thus, the establishment of attractive regions for
            prospecting. It also helps reducing exploration risks.
          </p>
        </section>
        <section>
          <h4>My Contributions</h4>
          <p>
            My main responsibilities were: being part of the solutions creating
            session of new tools and/or adjustments on previous features; create
            low fidelity screens; build high fidelity prototypes for usability
            testing; follow-ups with developers after the tool has been
            delivered.
          </p>
          <p>
            Besides that, some of the greatest challenges I would had to face
            some now and then was coming up with a graphical representation of a
            specific geological term, in which I would rely on long talks with
            the geologists and some book research.
          </p>
        </section>
      </div>
      <section className="flex flex-col gap-4">
        <Image
          imageSrc={Backgrounds}
          imageAltText="Three laptops with different software screens"
        />
        <Image
          imageSrc={MultipleScreens}
          imageAltText="Multiple software screens"
        />
      </section>
      <section>
        <p className="py-16 text-center">
          This project is owned by <em>PETROBRAS</em> and{" "}
          <em>Tecgraf/PUC-Rio Institute</em>.<br /> (c) All Rights Reserved.
        </p>
      </section>
    </main>
  );
}

export default Geomechanical;
