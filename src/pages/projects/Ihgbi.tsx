import '../../styles/Project.css'

import Image from '../../components/Project/ProjectImage'

import Highlight from '../../assets/projects/ihgbi/highlight.webp'
import MultipleScreens from '../../assets/projects/ihgbi/multiple_screens.webp'

function Ihgbi() {
	return (
		<main className='project'>
			<section className='project__header'>
				<h1>IHGBI Web Page</h1>
				<h2>
					Collaboration with{' '}
					<a
						href='https://www.behance.net/carvalhonelson'
						className='project__team'
					>
						Nelson Carvalho
					</a>
				</h2>
				<h3>UI/UX Design, 2020</h3>
			</section>
			<div className='project__description'>
				<section>
					<h4>Project Overview</h4>
					<p>
						IHGBI (Instituto Histórico e Geográfico da Baixada de Irajá) is a
						collective whose focus is to value the history, identity, memory and
						heritage of the Irajá neighborhood.
					</p>
					<p>
						As part of the collective's activities, besides participating in
						local events and promoting talks and diverse multimedia projects,
						the members have been publishing an online version of a journal with
						the many articles written by the members and collaborators.
					</p>
				</section>
				<section>
					<h4>My Contributions</h4>
					<p>
						Alongside Nelson Carvalho, we worked from the bottom-up to structure
						and design what would be the IHGBI's new web page, which would
						include all information about the collective's projects and access
						to their works in one platform.
					</p>
					<p>
						From the structural diagram to the making of the wireframes,
						prototype and final product, both of us worked in unison to apply
						the newest Visual Identity of the collective in a new product that
						would be able to portray the group's essence and meaning, while
						centralizing everything in one place.
					</p>
				</section>
			</div>
			<section className='project__gallery'>
				<Image
					imageSrc={Highlight}
					imageAltText='Three laptops with different software screens'
				/>
				<Image
					imageSrc={MultipleScreens}
					imageAltText='Multiple software screens'
				/>
			</section>
		</main>
	)
}

export default Ihgbi
