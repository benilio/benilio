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
	const [useWidth, setWidth] = useState(0)
	const [useHeight, setHeight] = useState(0)

	const coverSrc = projectCoverSrc.slice(0, projectCoverSrc.length - 5)

	return (
		<Link
			className='project__card'
			to={projectLink}
		>
			<img
				src={coverSrc + `_1600.webp`}
				alt={projectCoverAltText}
				srcSet={
					coverSrc +
					`_500.webp 500w, ` +
					coverSrc +
					`_800.webp 800w, ` +
					coverSrc +
					`_1080.webp 1080w, ` +
					coverSrc +
					`_1600.webp 1600w, ` +
					coverSrc +
					`_2000.webp 2000w, ` +
					coverSrc +
					`_2600.webp 2600w, ` +
					coverSrc +
					`_3200.webp 3200w`
				}
				onLoad={({ target }) => {
					const { naturalWidth, naturalHeight } = target as HTMLImageElement
					setAspectRatio(naturalWidth / naturalHeight)
					setWidth(naturalWidth)
					setHeight(naturalHeight)
				}}
				aspect-ratio={useAspectRatio}
				width={useWidth}
				height={useHeight}
				loading='lazy'
			/>
			<div className='project__details'>
				<h3>{projectName}</h3>
				<h4>{projectType}</h4>
			</div>
		</Link>
	)
}

export default ProjectCard
