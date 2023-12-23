import { Image, ImageCategories } from "@/types/plant.types";
import React, { useState } from "react";

interface ImageGalleryProps extends ImageCategories {}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  flower,
  leaf,
  habit,
  fruit,
  bark,
  other,
}) => {
  const imageCategories: { type: string; images: Image[] }[] = [
    { type: "flower", images: flower },
    { type: "leaf", images: leaf },
    { type: "habit", images: habit },
    { type: "fruit", images: fruit },
    { type: "bark", images: bark },
    { type: "other", images: other },
  ];

  const availableCategories = imageCategories.filter(
    (category) => category.images?.length > 0
  );

  const [selectedImages, setSelectedImages] = useState<Image[]>(
    availableCategories[0]?.images || []
  );

  const [selectedImage, setSelectedImage] = useState<Image>(
    selectedImages[0] || { id: 0, image_url: "", copyright: "" }
  );

  const handleCheckboxChange = (imageType: Image[]) => {
    setSelectedImages(imageType);
    setSelectedImage(imageType[0]);
  };

  const selectImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    image: Image
  ) => {
    e.preventDefault();
    setSelectedImage(image);
  };

  return (
    <div className="border p-3 border-black max-w-[30%] h-fit">
      <div className="flex flex-wrap gap-3 border-b-[1px] border-black">
        {availableCategories.map((category) => (
          <label key={category.type}>
            <input
              type="checkbox"
              checked={selectedImages === category.images}
              className="m-1"
              onChange={() => handleCheckboxChange(category.images)}
            />
            {category.type}
          </label>
        ))}
      </div>

      <div>
        <div className="w-[300px] ">
          {selectedImage && (
            <img
              src={selectedImage.image_url}
              alt="Selected"
              style={{ width: "300px", height: "300px", margin: "5px" }}
            />
          )}
        </div>

        <div className="flex flex-wrap border-t border-black">
          {selectedImages.map((image, index) => (
            <button key={index} onClick={(e) => selectImage(e, image)}>
              <img
                src={image.image_url}
                alt={`Image ${index}`}
                style={{ width: "50px", height: "50px", margin: "5px" }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
