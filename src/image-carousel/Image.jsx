export default function Image({ imageSrc, imageAlt, imageActive }) {
  const defineClass = (imageActive) => {
    const base = "carousel-item image-container nin-w-50 vh-60";
    return imageActive ? `${base} active` : base;
  };

  return (
    <div className={defineClass(imageActive)}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="d-block object-fit-contain w-100 h-100"
      />
    </div>
  );
}
