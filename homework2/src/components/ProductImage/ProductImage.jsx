export default function ProductImage({ images, alt }) {
  return (
    <div className="relative w-[28.125%] pb-[28.125%] bg-gray-200 rounded-2xl">
      <img
        src={images}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
      />
    </div>
  );
}
