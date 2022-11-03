import React from "react";
import "./SubPages.css";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import izgaraİtem from "./İtemJsonFolder/izgaraİtem.json";
export const izgara = () => {
 
  return (
    
    <nav className='İtem'>
      <br />
      <h2>Izgara Menüsü</h2>
      <br />
             <ul className='İtemList'>
              {izgaraİtem.map((val)=>{
                return(
                  <li
                  className="row"
                 >
                    <Popup className = "popup" trigger={<img src={process.env.origin = val.image} alt="items" />} position="center">
                        <div className = "popupalt"> <img src={process.env.origin = val.image} alt="items" /> <h2> {val.title}<br /></h2 ><br /><h5> {val.fiyat}<br /></h5 ><br />  Salata ve tercih ettiğiniz pilav ile servis edilmektedir.</div>
                    </Popup>
                   <div>{val.title}</div>
                  </li>
                );
              })}
             </ul>
        </nav>
  );
};
