import React from "react";
import "./SubPages.css";
import Corbaİtem from "./İtemJsonFolder/Corbaİtem.json";
export const Corba = () => {
 
  return (
    
    <nav className='İtem'>
       <h2>Çorba Menüsü</h2>
             <ul className='İtemList'>
              {Corbaİtem.map((val)=>{
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
