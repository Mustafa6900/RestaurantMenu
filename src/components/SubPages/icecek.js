import React from "react";
import "./SubPages.css";
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
                    <img src={process.env.origin = val.image} alt="items" /> 
                   <div>{val.title}</div>
                  </li>
                );
              })}
             </ul>
        </nav>
  );
};
