import ProjectCard from './ProjectCard'
import '../../styles/ProjectSection.css'

import coverGeological from '../../assets/projects/geological/cover.webp'
import coverGeomechanical from '../../assets/projects/geomechanical/cover.webp'
import coverIhgbi from '../../assets/projects/ihgbi/cover.webp'
import coverRandomWorkCollection from '../../assets/projects/random-work-collection/cover.webp'

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
			<div className='projects'>
				<ProjectCard
					projectLink='/projects/ihgbi/'
					projectName='IHGBI Web Page'
					projectType='UI/UX Design'
					projectCoverSrc={coverIhgbi}
					projectCoverAltText='Software screens and Laptop with software open and running'
				/>
				<ProjectCard
					projectLink='/projects/random-work-collection/'
					projectName='Random Work Collection'
					projectType='Gaphic Design'
					projectCoverSrc={coverRandomWorkCollection}
					projectCoverAltText='Abstract digital work'
				/>
			</div>
		</section>
	)
}

export default Projects
