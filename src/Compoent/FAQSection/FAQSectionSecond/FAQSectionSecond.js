import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import style from "./FAQSectionSecond.module.css"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  width: '100%',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FAQSectionSecond() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={style.main}>
      <div className={style.title_box}>
        <hr />
        <span>Luxury</span>
        <hr />
      </div>
      <div className={style.header}>
        <h1>BUBBLE BASKET</h1>
        <p>
          Ele atterum signiferumque his, sit in augue populae intellegam id
          tales accusata in sea
        </p>
      </div>
      <br/>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6">What types of wines and champagnes do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a diverse selection of wines and champagnes, including reds, whites, rosés, sparkling wines, and premium champagnes from renowned vineyards worldwide.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6">Are your products sourced directly from producers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we source our wines and champagnes directly from trusted producers and vineyards to ensure authenticity and quality.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6">Do you provide international shipping?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer international shipping to many countries around the world. You can check if we deliver to your location during the checkout process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="h6">Can I purchase wines and champagnes as gifts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! Our products make excellent gifts for any occasion. During checkout, you can select the option to ship directly to the recipient and even include a personalized message.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography variant="h6">How do I choose the right wine or champagne?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We provide detailed product descriptions, tasting notes, and recommendations to help you make an informed decision. Additionally, our customer service team is available to assist you with any questions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography variant="h6">Do you offer any discounts or promotions?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we frequently run promotions and offer discounts on select products. Be sure to sign up for our newsletter to receive exclusive offers and updates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography variant="h6">What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept various payment methods, including major credit cards, PayPal, and bank transfers, to ensure a convenient and secure checkout process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography variant="h6">What is your return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            While we strive for your complete satisfaction, we understand that returns may be necessary. Please refer to our returns policy for detailed information on how to initiate a return or exchange.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography variant="h6">Are your wines and champagnes suitable for special occasions?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! Our curated selection includes wines and champagnes perfect for weddings, anniversaries, birthdays, and other special celebrations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography variant="h6">How can I contact customer support for further assistance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our customer support team is available to assist you with any inquiries or concerns. You can reach us through our contact page, where you'll find options to email us directly or fill out a contact form. We strive to respond promptly to all customer inquiries.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
