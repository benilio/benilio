import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import '../../styles/Project.css'

function Image({
	imageSrc,
	imageAltText,
}: {
	imageSrc: string
	imageAltText: string
}) {
	return (
		<Zoom>
			{/* <a href={imageSrc} target='_blank' > */}
			<img
				src={imageSrc}
				alt={imageAltText}
				className='project__image'
			/>

			{/* </a> */}
		</Zoom>
	)
}

export default Image
