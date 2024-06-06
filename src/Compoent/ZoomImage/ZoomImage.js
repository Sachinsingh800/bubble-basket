import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from  "./ZoomImage.module.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  maxWidth: '90%',
  maxHeight: '90%',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
    setZoom(prevZoom => prevZoom + 0.2);
  };

  const zoomOut = () => {
    setZoom(prevZoom => (prevZoom > 1 ? prevZoom - 0.2 : 1));
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
      >
        <Box sx={style}>
          <img
          className={styles.img}
            src={productImage}
            alt={producttitle}
            style={{ ...imgStyle, transform: `scale(${zoom})` }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', mt: 2 }}>
            <Button variant="contained" onClick={zoomIn}>
              Zoom In
            </Button>
            <Button variant="contained" onClick={zoomOut}>
              Zoom Out
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
