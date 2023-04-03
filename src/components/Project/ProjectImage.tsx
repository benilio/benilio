function Image({
  imageSrc,
  imageAltText,
}: {
  imageSrc: string;
  imageAltText: string;
}) {
  return (
    <a href={imageSrc} target="_blank">
      <img
        src={imageSrc}
        alt={imageAltText}
        className="rounded-xl drop-shadow-md"
      />
    </a>
  );
}

export default Image;
