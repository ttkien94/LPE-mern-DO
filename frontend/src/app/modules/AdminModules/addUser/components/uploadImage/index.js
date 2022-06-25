import React, { useRef, memo } from "react";

function UploadImage({ image, onChangeImage, removeImage, type }) {
  const hiddenRef = useRef(null);

  return (
    <>
      {type === "avatar" && (
        <>
          {image ? (
            <div className="wrapperUpload">
              <img
                src={image}
                alt="icon-has-uploaded"
                className="avatarHasUpload"
              ></img>

              <div className="buttonDeleteImage" onClick={removeImage}>
                <i className="fas fa-trash"></i>
              </div>
            </div>
          ) : (
            <label className="labelAvatar">
              <input
                type="file"
                id="avatarundefined"
                name="avatar"
                ref={hiddenRef}
                onChange={onChangeImage}
              />
              {
                <img
                  src="https://kt.city/static/icon-upload.png"
                  alt="icon-upload"
                ></img>
              }
            </label>
          )}
        </>
      )}

      {type === "cover" && (
        <>
          {image ? (
            <div className="wrapperUpload-cover">
              <img
                src={`${image}`}
                alt="icon-has-uploaded"
                className="coverHasUpload"
              ></img>

              <div className="buttonDeleteImage" onClick={removeImage}>
                <i className="fas fa-trash"></i>
              </div>
            </div>
          ) : (
            <label className="labelCover">
              <input
                type="file"
                id="avatarundefined"
                name="cover"
                ref={hiddenRef}
                onChange={onChangeImage}
              />
              {
                <img
                  src="https://kt.city/static/icon-upload.png"
                  alt="icon-upload"
                ></img>
              }
            </label>
          )}
        </>
      )}
    </>
  );
}

export default memo(UploadImage);
