import React from "react";
import "./BearCard.css";

const BearCard = props => (
    <div className="thumbnail">
        <a href="#" onClick={props.shuffle}>
            <img alt={props.name} src={props.image} />
        </a>
    </div>
);

export default BearCard;