import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { compress } from "image-conversion";
import { MdFileUpload } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "../../../../UI";
import Container from "./styles";

const SmImg = ({ imgSrc, alt, onClick }) => {
  return (
    <div className="smImg-container">
      {imgSrc && (
        <>
          <LazyLoadImage
            src={
              typeof imgSrc === "string" ? imgSrc : URL.createObjectURL(imgSrc)
            }
            alt={alt}
            effect="blur"
          />
          <Button type="button" icon onClick={onClick}>
            <IoClose />
          </Button>
        </>
      )}
    </div>
  );
};

const UploadForm = ({
  formData: { image_url_1, image_url_2, image_url_3 },
}) => {
  const [images, setImg] = useState(() => {
    if (image_url_1 && image_url_2 && image_url_3) {
      return [image_url_1, image_url_2, image_url_3];
    } else {
      return [];
    }
  });
  const handleAddImg = ({ target }) => {
    const files = Array.from(target.files).splice(0, 3);
    if (!files.length === 0) return;

    files.map((file) => {
      return compress(file, {
        type: file.type,
        width: 200,
        height: 200,
        orientation: 2,
        scale: 0.5,
        quality: 0.6,
      }).then((blobFile) => {
        const bf = blobFile;
        bf.lastModifiedDate = new Date();
        bf.name = file.name;

        setImg((images) => {
          if (images.length < 3) {
            return [...images, bf];
          } else {
            return {
              ...images,
            };
          }
        });
      });
    });
  };
  return (
    <Container>
      <label className="upload-container" id="productImg">
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleAddImg}
          disabled={images.length === 3 ? true : false}
          multiple
        />
        <MdFileUpload />
        <p>Upload Image. Max 2MB</p>
      </label>
      <div className="smImg-row">
        {[...Array(3).keys()].map((item, index) => (
          <SmImg
            key={`smImg-${index}`}
            imgSrc={images[index]}
            alt={`productImg-${index}`}
            onClick={() =>
              setImg((s) => {
                const imgs = [...images];
                imgs.splice(index, 1, "");
                return imgs.filter(Boolean);
              })
            }
          />
        ))}
      </div>
      <p className="upload-instruction">
        You are allowed to upload only 3 images
      </p>
    </Container>
  );
};

export default UploadForm;
