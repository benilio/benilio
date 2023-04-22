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
					projectCoverAltText='imagem'
				/>
				<ProjectCard
					projectLink='/projects/geomechanical/'
					projectName='Integrated Geomechanical Analysis Software'
					projectType='UI/UX Design'
					projectCoverSrc={coverGeomechanical}
					projectCoverAltText='imagem'
				/>
			</div>
		</section>
	)
}

export default Projects
