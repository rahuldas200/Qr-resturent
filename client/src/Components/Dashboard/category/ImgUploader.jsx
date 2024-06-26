import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const ImgUploader = ({ setImageSrc, imageSrc,preview ,setPreview}) => {
  

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

  function dataURItoBlob(dataURI) {
    if (!dataURI) {
      return null;
    }

    const [metadata, base64Data] = dataURI.split(",");
    const mime = metadata.match(/:(.*?);/)[1];

    const byteCharacters = atob(base64Data);

    const byteArray = new Uint8Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteArray[i] = byteCharacters.charCodeAt(i);
    }
    return new Blob([byteArray], { type: mime });
  }

  function handleFile(file) {
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onload = () => {
      const dataURL = render.result;
      if (typeof dataURL === "string" && dataURL.startsWith("data:")) {
        const data = dataURItoBlob(dataURL);
        setImageSrc(data);
        setPreview(dataURL);
      } else {
        console.error("Invalid data URI:", dataURL);
      }
    };
  }

  function handleFileInputChange(e) {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
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
      {preview === null ? (
        <label htmlFor="fileElem">
          Drag & Drop files here or click to select
        </label>
      ) : (
        <div onClick={() => setPreview(null)} className="text-end">
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
