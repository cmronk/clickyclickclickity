import React from "react";
import "./Title.css";

const Title = props => (
    <div className="jumbotron">
        <div className="title-container">
            <h1 className="title">{props.children}</h1>
            <hr />
            <p className="lead">I don't like green clicks and ...</p>
            <p>clicking on the same images twice!</p>
        </div>
    </div>
)

export default Title;
