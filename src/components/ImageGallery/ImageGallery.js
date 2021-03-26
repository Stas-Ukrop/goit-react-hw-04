import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ massItems, openModal }) => {
  return (
    <ul className="ImageGallery" onClick={openModal}>
      {massItems.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  massItems: PropTypes.array,
  openModal: PropTypes.func,
};
