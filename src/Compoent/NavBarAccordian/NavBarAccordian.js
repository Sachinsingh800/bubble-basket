import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import styles from "./NavBarAccordian.module.css";
import bulkOrderForm from "../BulkOrderForm/bulkOrderForm.xlsx";

export default function NavBarAccordian() {
  const downloadExcel = () => {
    // Path to the Excel file in your project folder
    const excelFilePath = bulkOrderForm;

    fetch(excelFilePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Luxury_Bubble_Basket.xlsx");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        alert("Your Bulk Order Form is Downloaded");
      })
      .catch((error) => {
        console.error("Error downloading the Excel file:", error);
      });
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong> VINTAGE</strong>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.main}>
            <a href={`brand/${"Dom Perignon"}`}>
              <div className={styles.img_product_box}>
                <img
                  src="https://res.cloudinary.com/dnolz4gzn/image/upload/v1716544017/wineProducts/vt2oafdaa7u4w8asqyju.png"
                  alt="Dom Perignon Vintage Champagne"
                />
              </div>
            </a>

            <p>HARMONY REVEALED</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <strong>CAYMUS</strong>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.main}>
            <a href={`brand/${"Caymus"}`}>
              <div className={styles.img_product_box}>
                <img
                  src="https://res.cloudinary.com/dnolz4gzn/image/upload/v1716529295/wineProducts/bwyqm2jly1r78zo3jvr7.png"
                  alt="Caymus"
                />
              </div>
            </a>

            <p>HARMONY REVEALED</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <strong>VEUVE CLICQUOT</strong>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.main}>
            <a href={`brand/${"Caymus"}`}>
              <div className={styles.img_product_box}>
                <img
                  src="https://res.cloudinary.com/dnolz4gzn/image/upload/v1716541096/wineProducts/kyahcm1smm2ijcxsa5qk.png"
                  alt="Veuve Clicquot"
                />
              </div>
            </a>

            <p>HARMONY REVEALED</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <div className={styles.container}>
        <a href="/HAND%20PAINTED">
          <div className={styles.img_box_container}>
            <img
              src="https://res.cloudinary.com/dnolz4gzn/image/upload/v1716971516/wineProducts/zkii68ttk3w01in25szs.png"
              alt=""
            />
          </div>
        </a>
        <div className={styles.lists}>
          <a href="/">
            <p>HOME</p>
          </a>
          <a>
            <p onClick={downloadExcel}>BULK ORDER</p>
          </a>
          <a href="/Order-History">
            <p>TRACK ORDER</p>
          </a>
          <a href="/Contact-Us">
            <p>CONTACT</p>
          </a>
        </div>
      </div>
    </div>
  );
}
