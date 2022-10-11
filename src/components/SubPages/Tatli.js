import React from "react";
import "./SubPages.css";
import Tatliİtem from "./İtemJsonFolder/Tatliİtem.json";
export const Tatli = () => {
 
  return (
    
    <nav className='İtem'>
      <h2>Tatlı Menüsü</h2>
             <ul className='İtemList'>
              {Tatliİtem.map((val)=>{
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
