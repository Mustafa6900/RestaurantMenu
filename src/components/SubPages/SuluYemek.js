import React from "react";
import "./SubPages.css";
import SuluYemekİtem from "./İtemJsonFolder/SuluYemekİtem.json";
export const SuluYemek = () => {
 
  return (
    
    <nav className='İtem'>
      <br />
      <h2>Sulu Yemek Menüsü</h2>
      <br />
             <ul className='İtemList'>
              {SuluYemekİtem.map((val)=>{
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
