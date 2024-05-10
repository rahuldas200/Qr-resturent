import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const ImgUploader = ({ setImageSrc, imageSrc }) => {
  const [preview, setPreview] = useState(null);

  function handleDrop(acceptedFiles) {
    const imageFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    if (imageFiles.length > 0) {
      const file = imageFiles[0];
      handleFile(file);
    } else {
      console.log("No image files dropped.");
    }
  }

  function handleFile(file) {
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend=()=> {
      setPreview(render.result);
      console.log(preview)
    }
  }
  

  function handleFileInputChange(e) {

  }

  return (
    <div
      className="border-2 rounded-sm bg-[#ebe9e9] border-dashed border-[#8465ff] p-4 text-center cursor-pointer"
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="fileElem"
        accept="image/*"
        className="hidden"
        onChange={handleFileInputChange}
      />
      {imageSrc === null ? (
        <label htmlFor="fileElem">
          Drag & Drop files here or click to select
        </label>
      ) : (
        <div onClick={() => setImageSrc(null)} className="text-end">
          <RxCross2 />
        </div>
      )}
      <div id="preview" className="mt-4">
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="max-w-full max-h-48 mx-auto"
          />
        )}
      </div>
    </div>
  );
};

export default ImgUploader;
