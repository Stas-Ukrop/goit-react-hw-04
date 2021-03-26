import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        alt=""
        name={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};
