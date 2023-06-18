export const getImageDimensions = (image: string) => {
  const dimensions = image.split('-')[2]
  const [width, height] = dimensions.split('x').map(Number)

  if (!width || !height || Number.isNaN(width) || Number.isNaN(height)) {
    return
  }

  // const aspectRatio = width / height

  return {
    width,
    height,
  }
}
