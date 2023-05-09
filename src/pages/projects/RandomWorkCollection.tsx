import '../../styles/Project.css'

import Image from '../../components/Project/ProjectImage'

import Blaradithe from '../../assets/projects/random-work-collection/blaradithe.webp'
import Boiling from '../../assets/projects/random-work-collection/boiling.webp'
import Cold from '../../assets/projects/random-work-collection/cold.webp'
import Jupiter from '../../assets/projects/random-work-collection/jupiter.webp'
import NelsonPorNelson from '../../assets/projects/random-work-collection/nelson-por-nelson.webp'
import UndergroundArchives from '../../assets/projects/random-work-collection/underground-archives.webp'
import Warm from '../../assets/projects/random-work-collection/warm.webp'

function RandomWorkCollection() {
	return (
		<main className='project'>
			<section className='project__header'>
				<h1>Random Work Collection</h1>
				{/* <h2>@ MDGeo Team, Tecgraf Institute/PUC-Rio</h2> */}
				<h3>Graphic Design, 2016&#8211;2020</h3>
			</section>
			<div className='project__description'>
				<section>
					<h4>Project Overview</h4>
					<p>
						Some random works done over the years, as Freelance projects and/or
						just for fun.
					</p>
				</section>
			</div>
			{/* <section className='project__gallery'> */}
			<section className='project__gallery_alt'>
				<Image
					imageSrc={Blaradithe}
					imageAltText='Graphic Design artwork'
					addClasses='mb-6'
				/>
				<Image
					imageSrc={UndergroundArchives}
					imageAltText='Graphic Design artwork'
					addClasses='mb-6'
				/>
				<Image
					imageSrc={NelsonPorNelson}
					imageAltText='Graphic Design artwork'
					addClasses='mb-6'
				/>
				<Image
					imageSrc={Jupiter}
					imageAltText='Graphic Design artwork'
					addClasses='mb-6'
				/>
				<Image
					imageSrc={Cold}
					imageAltText='Graphic Design artwork'
					addClasses='mb-6'
				/>
				<Image
					imageSrc={Warm}
					imageAltText='Graphic Design artwork'
					addClasses='mb-6'
				/>
				<Image
					imageSrc={Boiling}
					imageAltText='Graphic Design artwork'
				/>
			</section>
		</main>
	)
}

export default RandomWorkCollection
