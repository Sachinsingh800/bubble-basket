import React from "react";
import style from "./PendingAndRefundSectionSecond.module.css";

function PendingAndRefundSectionSecond() {
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
   <br />
   <div className={style.container}>
     <div className={style.left}>
       <h2>Refund and Return Policy</h2>
       <p>
         By accessing this website, we assume you accept these terms and
         conditions in full. Do not continue to use [Website] if you do not
         accept all of the terms and conditions stated on this page.
       </p>
       <p>
         We employ the use of cookies. By using [Website]’s website you
         consent to the use of cookies in accordance with [Website]’s privacy
         policy.
       </p>
       <p>
         Most of the modern day interactive web sites use cookies to enable
         us to retrieve user details for each visit. Cookies are used in
         some areas of our site to enable the functionality of this area and
         ease of use for those people visiting. Some of our affiliate /
         advertising partners may also use cookies.
       </p>
       <h3>License</h3>
       <p>
         Unless otherwise stated, [Website] and/or its licensors own the
         intellectual property rights for all material on [Website]. All
         intellectual property rights are reserved. You may view and/or print
         pages from [Website] for your own personal use subject to
         restrictions set in these terms and conditions.
       </p>
       {/* Add more sections as needed */}
     </div>
     <div className={style.right}>
       <h2>Limitations</h2>
       <p>
         In no event shall [Website] or its suppliers be liable for any
         damages (including, without limitation, damages for loss of data or
         profit, or due to business interruption) arising out of the use or
         inability to use the materials on [Website], even if [Website] or a
         [Website] authorized representative has been notified orally or in
         writing of the possibility of such damage. Because some jurisdictions
         do not allow limitations on implied warranties, or limitations of
         liability for consequential or incidental damages, these limitations
         may not apply to you.
       </p>
       {/* Add more sections as needed */}
     </div>
   </div>
 </div>
  );
}

export default PendingAndRefundSectionSecond;
