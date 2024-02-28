interface ImgComponentProps {
  src?: string
  alt?: string
}

function ImageComponent({ src, alt }: ImgComponentProps) {
  return <img src={src} alt={alt} />
}

export default ImageComponent;
