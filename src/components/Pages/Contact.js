import React from "react";
import "./Contact.css";
export const Contact = () => {
  return (
    <div>
      <br />
      <h1>İletişim</h1>
      <br />
    <div className="buttons">
      <a href="https://www.google.com/maps/place/Dombili+Kebap/@40.2610553,40.2270311,20.73z/data=!4m5!3m4!1s0x406f87089225e217:0x8e2590a393222c86!8m2!3d40.2609587!4d40.2270449">
         <img src="./google.png" alt="googlemap" width="50px" height="50px"/>
      </a>
      <br />
      Adres : Camikebir, Kuyubaşı Cd. No:1, 69000 Bayburt Merkez/Bayburt
      <br />
      <br />
      <a className="telefon" href="tel:+904582116899">
      Telefon : 0458 211 68 99 
      </a>
      <br />
      <br />
      </div>
    </div>
  );
};
