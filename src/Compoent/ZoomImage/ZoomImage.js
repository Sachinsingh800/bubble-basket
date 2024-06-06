import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from './ZoomImage.module.css';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  border: 'none',
};

const imgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  transition: 'transform 0.25s ease',
};

export default function ZoomImage({ productImage, producttitle }) {
  const [open, setOpen] = React.useState(false);
  const [zoom, setZoom] = React.useState(1);

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

  return (
    <div>
      <div onClick={handleOpen}>
        <img src={productImage} alt={producttitle} style={{ cursor: 'pointer' }} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <div className={styles.modalContent}>
          <img
          className={styles.img}
            src={productImage}
            alt={producttitle}
            style={{ ...imgStyle, transform: `scale(${zoom})` }}
          />
          <div className={styles.button_box}>
            <button onClick={zoomIn}><ZoomInIcon className={styles.icons} /></button>
            <button onClick={zoomOut}><ZoomOutIcon className={styles.icons} /></button>
            <button onClick={handleClose}><CloseIcon className={styles.icons} /></button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
