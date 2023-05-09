import { useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import '../../styles/Project.css'

function Image({
	imageSrc,
	imageAltText,
	addClasses,
}: {
	imageSrc: string
	imageAltText: string
	addClasses?: string
}) {
	const [useAspectRatio, setAspectRatio] = useState(0)
	const [useWidth, setWidth] = useState(0)
	const [useHeight, setHeight] = useState(0)

	return (
		<Zoom>
			<img
				src={imageSrc}
				alt={imageAltText}
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
				className={`project__image ${addClasses}`}
			/>
		</Zoom>
	)
}

export default Image
