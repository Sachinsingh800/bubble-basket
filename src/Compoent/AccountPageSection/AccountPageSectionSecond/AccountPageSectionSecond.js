import React from 'react'
import style from './AccountPageSectionSecond.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import AddHomeIcon from '@mui/icons-material/AddHome';

function AccountPageSectionSecond() {
  return (
    <div className={style.main}>
        <h1>Manage Your Account</h1>
        <div className={style.container}>
               <a href='/RegisterPage'>
               <div>
                     <HowToRegIcon  className={style.icon}  />
                    <span>Register</span>
                 </div>
                </a>  

                <a href='/Login'>
                <div>
                     <LoginIcon className={style.icon} />
                    <span>Login</span>
                 </div>
                </a>
             
                 <div>
                     <AccountCircleIcon className={style.icon} />
                    <span>Edit your account information</span>
                 </div>
                 <div>
                     <PasswordIcon className={style.icon}/>
                    <span> Change your password</span>
                 </div>
                 <div>
                     <AddHomeIcon className={style.icon}/>
                    <span> Modify your address book entries</span>
                 </div>
        </div>
    </div>
  )
}

export default AccountPageSectionSecond
