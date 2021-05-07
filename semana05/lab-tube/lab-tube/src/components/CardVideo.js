import React from "react";
import "../App.css";

export function CardVideo(props) {
  return(
    <div 
      className="card0" 
      onClick={null}
    >
      <img src={props.imagem} alt="" />
      <h4>{props.textocard}</h4>
    </div>
  )
}