import React from "react";
import "../App.css";



export function CardVideo(props) {
  return(
      <div 
      className="card" 
      onClick={() => props.funcaoClick(props.textocard)}
      >
      <img src={props.imagem} alt="" />
      <div
      className="campotexto">
      <h4>{props.textocard}</h4>
      </div>
    </div>
  )
}