import * as React from "react";
import Modal from "@mui/material/Modal";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./ZoomImage.module.css";

const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  border: "none",
};

const imgStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  transition: "transform 0.25s ease",
};

export default function ZoomImage({ productImage, producttitle }) {
  const [open, setOpen] = React.useState(false);
  const [zoom, setZoom] = React.useState(1);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setZoom(1); // Reset zoom on close
  };

  const zoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.2);
  };

  const zoomOut = () => {
    setZoom((prevZoom) => (prevZoom > 1 ? prevZoom - 0.2 : 1));
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : productImage?.productImg?.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < productImage?.productImg?.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviewClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.main}>
      <div className={styles.preview_box}>
        {productImage?.productImg?.map((img, index) => (
          <div
            key={index}
            className={`${styles.preview_img} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handlePreviewClick(index)}
          >
            <img src={img?.url} alt={`Preview ${index + 1}`} />
          </div>
        ))}
      </div>
      <img
        src={
          productImage?.productImg?.length > 1
            ? productImage?.productImg[currentIndex]?.url
            : productImage?.productImg[0]?.url
        }
        alt={producttitle}
        title={producttitle}
        loading="lazy"
        width="auto"
        height="auto"
        style={{ ...imgStyle, cursor: "pointer" }}
        onClick={handleOpen} // Opens modal on main image click
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <div className={styles.modalContent}>
          <div className={styles.imageContainer}>
            <img
              className={styles.img}
              src={productImage?.productImg[currentIndex]?.url}
              alt={producttitle}
              title={producttitle}
              loading="lazy"
              width="auto"
              height="auto"
              style={{ ...imgStyle, transform: `scale(${zoom})` }}
            />
          </div>
          <div className={styles.button_box}>
            {productImage?.productImg?.length > 1 && (
              <button onClick={handlePrevImage} className={styles.navButton}>
                <ArrowBackIcon className={styles.icons} />
              </button>
            )}
            <button onClick={zoomIn} className={styles.navButton}>
              <ZoomInIcon className={styles.icons} />
            </button>
            <button onClick={zoomOut} className={styles.navButton}>
              <ZoomOutIcon className={styles.icons} />
            </button>
            {productImage?.productImg.length > 1 && (
              <button onClick={handleNextImage} className={styles.navButton}>
                <ArrowForwardIcon className={styles.icons} />
              </button>
            )}
            <button onClick={handleClose} className={styles.navButton}>
              <CloseIcon className={styles.icons} />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
