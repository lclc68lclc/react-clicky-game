import React from "react";
import "./BearCard.css";

const BearCard = props => (
    <div className="card">
        <img id={props.id} onClick= {props.shuffle} alt={props.name} src={props.image} />
    </div>
);

export default BearCard;