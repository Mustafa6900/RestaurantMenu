import React from "react";
import "./Home.css";
import Menuİtem from "../SubPages/İtemJsonFolder/Menuİtem.json";
export const Home = () => {
 
  return (
    <nav className='Homeİtem'>
      <br />
      <h2>Menü</h2>
      <br />
             <ul className='HomeİtemList'>
              {Menuİtem.map((val)=>{
                return(
                  <li
                  className="row"
                  onClick={()=>{
                    window.location.pathname=val.routerLink;
                  }}>
                    <img src={process.env.origin = val.image} alt="items" /> 
                   <div>{val.title}</div>
                  </li>
                );
              })}
             </ul>
        </nav>
  );
};
