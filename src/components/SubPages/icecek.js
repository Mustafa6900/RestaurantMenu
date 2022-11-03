import React from "react";
import "./SubPages.css";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import İcecekİtem from "./İtemJsonFolder/icecekİtem.json";
export const icecek = () => {
 
  return (
    
    <nav className='İtem'>
      <br />
      <h2>İçecek Menüsü</h2>
      <br />
             <ul className='İtemList'>
              {İcecekİtem.map((val)=>{
                return(
                  <li
                  className="row"
                 >
                   <Popup className = "popup" trigger={<img src={process.env.origin = val.image} alt="items" />} position="center">
                        <div className = "popupalt"> <img src={process.env.origin = val.image} alt="items" /> <h2> {val.title}<br /></h2 ><br /><h5> {val.fiyat}<br /></h5 ><br /></div>
                    </Popup>
                   <div>{val.title}</div>
                  </li>
                );
              })}
             </ul>
        </nav>
  );
};
