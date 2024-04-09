import React from 'react'
import style from "./SectionFifth.module.css"
import drum from "../../Images/drum.png"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SectionFifth() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div className={style.main}>
      <div className={style.img_box}>
        <img src={drum} alt='Drum'/>
        </div>
      <div className={style.outer_container}>
       <div className={style.container}>
         <div className={style.input_container}>
         <p>SHOP BY CATEGORY</p>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 180,}}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
          style={{color:"maroon" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
         </div>
       
     <h6>Usu ad illum petentium error feugait</h6>
    </div>
       <div className={style.container}>
         <div className={style.input_container}>
         <p>GIFT BY BRAND</p>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 180,}}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
          style={{color:"maroon" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
         </div>
       
     <h6>Magna harum probatus ex eam mea
</h6>
    </div>
       <div className={style.container}>
         <div className={style.input_container}>
         <p>SHOP BY LUXURY</p>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 180,}}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
          style={{color:"maroon" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
         </div>
       
     <h6>Ne possit suavitate pri sint erroribus</h6>
    </div>
       <div className={style.container}>
         <div className={style.input_container}>
         <p>GIFT BY ORIGIN</p>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 180,}}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
          style={{color:"maroon" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
         </div>
       
     <h6>Dicant habemus denitionem sed ei elit</h6>
    </div>
    </div>
    </div>
  )
}

export default SectionFifth



