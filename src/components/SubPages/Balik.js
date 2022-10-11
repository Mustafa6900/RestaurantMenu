import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import "./SubPages.css";
import Balikİtem from "./İtemJsonFolder/Balikİtem.json";
export const Balik = () => {
 
  return (
    
    <nav className='İtem'>
      <h2>Balık Menüsü</h2>
             <ul className='İtemList'>
              {Balikİtem.map((val)=>{
                return(
                  <li
                  className="row"
                            
                 >
                    
                    <Popup className = "popup" trigger={<img src={process.env.origin = val.image} alt="items" />} position="center">
                        <div className = "popupalt"> <img src={process.env.origin = val.image} alt="items" /> <h2> {val.title};<br /></h2 > Salata ve turşu ile servis edilmektedir.</div>
                    </Popup>
                    
                  <div>{val.title}</div>
                  </li>
                );
              })}
             </ul>
        </nav>
  );
};
