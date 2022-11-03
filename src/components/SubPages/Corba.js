import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import "./SubPages.css";
import Corbaİtem from "./İtemJsonFolder/Corbaİtem.json";

export const Corba = () => {
 

  return (
    
    <nav className='İtem'>
      <br />
       <h2>Çorba Menüsü</h2>
       <br />
             <ul className='İtemList'>
              {Corbaİtem.map((val)=>{
                return(
                  
                  <li
                  className="row"
                 >
                    <Popup className = "popup" trigger={<img src={process.env.origin = val.image} alt="items" />} position="center">
                        <div className = "popupalt"> <img src={process.env.origin = val.image} alt="items" /> <h2> {val.title}<br /></h2 ><h5> {val.fiyat}<br /></h5 ><br />   (Ürünlerimiz günlük olduğu için tükenme olasığı bulunmaktadır. Lütfen ürün durumunu garsona sorunuz.)</div>
                    </Popup>

                   <div>{val.title}</div>
                  </li>
                );
              })}
             </ul>
        </nav>
  );
};
