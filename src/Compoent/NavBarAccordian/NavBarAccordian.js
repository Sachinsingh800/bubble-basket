import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import styles from "./NavBarAccordian.module.css";

export default function NavBarAccordian() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          VINTAGE
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
          CAYMUS
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
          VEUVE CLICQUOT
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
         <div className={styles.img_box_container}>
            <img src="https://res.cloudinary.com/dnolz4gzn/image/upload/v1716971516/wineProducts/zkii68ttk3w01in25szs.png" alt="" />
         </div>
         <div className={styles.lists}>
           <p>HOME</p>
           <p>BULK ORDER</p>
           <p>TRACK ORDER</p>
           <p>CONTACT</p>
         </div>
      </div>
    </div>
  );
}
