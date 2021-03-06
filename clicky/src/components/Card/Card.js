import React from "react";
import "./Card.css"

const Card = props => (
    <div className="card" value={props.id} onClick={() => props.handleClicks(props.id)}>
        <img alt={props.name} src={props.image}/>
    </div>
);

export default Card;