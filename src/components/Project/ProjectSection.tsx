import ProjectCard from './ProjectCard'
import '../../styles/ProjectSection.css'

import coverGeological from '../../assets/projects/geological/cover.webp'
import coverGeomechanical from '../../assets/projects/geomechanical/cover.webp'

function Projects() {
	return (
		<section id='projects'>
			<div className='projects'>
				<ProjectCard
					projectLink='/projects/geological/'
					projectName='Restoration and Simulation of Geological Models Software'
					projectType='UI/UX Design'
					projectCoverSrc={coverGeological}
					projectCoverAltText='Software screens and Desktop with software open and running'
				/>
				<ProjectCard
					projectLink='/projects/geomechanical/'
					projectName='Integrated Geomechanical Analysis Software'
					projectType='UI/UX Design'
					projectCoverSrc={coverGeomechanical}
					projectCoverAltText='Software screens and Laptop with software open and running'
				/>
			</div>
		</section>
	)
}

export default Projects
