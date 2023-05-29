import ImageCard from "./ImageCard";


export const ImageCardList = ({ images, handleElementClick }) => {
    return (
      <div className='mt-16 image_layout z-0'>
        {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
            />
        ))}
      </div>
    );
};