import React from "react";
import '../stylesheets/testimonio.css'

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" alt={`Foto de ${props.photo}`} src={require(`../imagenes/testimonio-${props.photo}.png`)} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.name}</strong> in {props.country}</p>
        <p className="cargo-testimonio">{props.job} at <strong>{props.company}</strong></p>
        <p className="texto-testimonio">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimonio;