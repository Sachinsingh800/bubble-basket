import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import pdfDoc from "../../../Pdf/Wine catalog_compressed.pdf";
import pdfDocToShow from "../../../Pdf/wine catalog.pdf";
import styles from './Catalog.module.css';
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";

const Catalog = () => {
  const handleDownload = () => {
    window.open(pdfDoc, '_blank');
  };

  return (
    <Container maxWidth="lg" className={styles.catalogContainer}>
      <Header />
      <Box className={styles.catalogHeader}>
        <Typography variant="h4" component="h1" className={styles.catalogTitle}>
          Our Wine Catalog
        </Typography>
        <IconButton 
          className={styles.downloadButton} 
          onClick={handleDownload} 
          aria-label="Download Catalog"
        >
          <DownloadIcon />
        </IconButton>
      </Box>
      <Box className={styles.catalogViewer}>
        <iframe
          src={`${pdfDocToShow}#toolbar=0&scrollbar=0&view=fitH`}
          className={styles.catalogIframe}
          title="Catalog"
        />
      </Box>
      <Footer />
    </Container>
  );
};

export default Catalog;
