import React, { forwardRef, useImperativeHandle, useState } from "react";
import Lightbox from "react-image-lightbox";

export const LPELightBox = forwardRef(({ listImage }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    handleOpen(number) {
      setPhotoIndex(number);
      setIsOpen(true);
    },
  }));

  const handlePrevPhoto = () => {
    setPhotoIndex((photoIndex + listImage.length - 1) % listImage.length);
  };

  const handleNextPhoto = () => {
    setPhotoIndex((photoIndex + 1) % listImage.length);
  };

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={listImage[photoIndex]}
          nextSrc={listImage[(photoIndex + 1) % listImage.length]}
          prevSrc={
            listImage[(photoIndex + listImage.length - 1) % listImage.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={handlePrevPhoto}
          onMoveNextRequest={handleNextPhoto}
        />
      )}
    </>
  );
});
