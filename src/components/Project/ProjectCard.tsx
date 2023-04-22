import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ProjectCard.css'

function ProjectCard({
	projectLink,
	projectName,
	projectType,
	projectCoverSrc,
	projectCoverAltText,
}: {
	projectLink: string
	projectName: string
	projectType: string
	projectCoverSrc: string
	projectCoverAltText: string
}) {
	const [useAspectRatio, setAspectRatio] = useState(0)

	return (
		<Link
			className='project__card'
			to={projectLink}
		>
			<img
				src={projectCoverSrc}
				alt={projectCoverAltText}
				onLoad={({ target }) => {
					const { naturalWidth, naturalHeight } = target as HTMLImageElement
					setAspectRatio(naturalWidth / naturalHeight)
					console.log(naturalWidth, naturalHeight)
				}}
				aspect-ratio={useAspectRatio}
			/>
			<div className='project__details'>
				<h3>{projectName}</h3>
				<h4>{projectType}</h4>
			</div>
		</Link>
	)
}

export default ProjectCard
