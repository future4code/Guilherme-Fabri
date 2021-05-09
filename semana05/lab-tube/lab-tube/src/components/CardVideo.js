import React from "react";
import "../App.css";

function reproduzVideo() {
  alert("O vídeo está sendo reproduzido")
}

export function CardVideo(props) {
  return(
    <div 
      className="card" 
      onClick={reproduzVideo}
    >
      <img src={props.imagem} alt="" />
      <div
      className="campotexto">
      <h4>{props.textocard}</h4>
      </div>
    </div>
  )
}