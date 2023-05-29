"use client";
import Image from 'next/image';
import Link from "next/link";


const ImageCard = ({image, handleElementClick, handleEdit, handleDelete}) => {
  const thumbUrl = image.urls && image.urls.thumb;
  const creator = image.user && image.user.name

  return (
    <Link href={`/image/${image.id}`}>
    <div
    className={`image_card w-[${image.width}px] h-[${image.height}px] `}
    >
      <div className="flex justify-between items-start gap-2">
        <div
        className="flex-1 flex-justify-start items-center gap-1 cursor-pointer"
        onClick={handleElementClick}
        >
          <Image
            src={thumbUrl}
            alt="Image"
            width={image.width}
            height={image.height}
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              Creator: {creator}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              Created at: {image.created_at}
            </p>
          </div>
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        Description: {image.description}
      </p>
      <p className="font-inter text-sm blue_gradient">
        Likes: {image.likes}
      </p>
    </div>
    </Link>
  )
}

export default ImageCard;