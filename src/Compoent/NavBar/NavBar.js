import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import style from "./NavBar.module.css"
import logo from "../Images/logo.jpg"
import searchicon from "../Images/search.png"
import shoppingCart from "../Images/shopping-basket.png"
import avatarimg from "../Images/user.png"
import menuicon from "../Images/menu.png"
import HomePageCarousel from '../HomePageCarousel/HomePageCarousel';
import FirstSection from '../Sections/FirstSection/FirstSection';
import AnchorTemporaryDrawer from '../AnchorTemporaryDrawer/AnchorTemporaryDrawer';
import SecondSection from '../Sections/SecondSection/SecondSection';
import SectionThird from '../Sections/SectionThird/SectionThird';
import SectionFourth from '../Sections/SectionFourth/SectionFourth';
import SectionFifth from '../Sections/SectionFifth/SectionFifth';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
             <AnchorTemporaryDrawer />
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{backgroundColor:"white",boxShadow:"none"}}>
          <Toolbar>
              <div className={style.tool_bar}>
                 <div className={style.left_section}>
                    <p className="futura-pt-book">HOME</p>
                    <p className="futura-pt-book">BULKORDER</p>
                    <p className="futura-pt-book"> TRACKORDER</p>
                 </div>
                 <div  className={style.middle_section}>
                 <div className={style.img_box}>
                     <img src={logo} alt='logo' />
                 </div>
                 </div>
         
                 <div className={style.right_section}>
                    <div className={style.icon_box}>
                        <img  src={searchicon}  alt='search'/>
                    </div>
                    <div className={style.icon_box}>
                        <img  src={avatarimg}  alt='user'/>
                    </div>
                    <div className={style.icon_box}>
                        <img  src={shoppingCart}  alt='shopping'/>
                    </div>
                    <div className={style.icon_box4}>
                        <img  src={menuicon}  alt='menu'/>
                    </div>
                 </div>
              </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <div  className={style.Container}>
          <FirstSection/>
          <SecondSection />
          <SectionThird />
          <SectionFourth />
          <SectionFifth />
        </div>
    </React.Fragment>
  );
}