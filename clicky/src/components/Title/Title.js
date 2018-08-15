import React from "react";
import "./Title.css";

// const Title = props => <h1 className="title">{props.children}</h1>;
const Title = props => (
    <div class="jumbotron">
        <div class="title-container">
            <h1 className="title">{props.children}</h1>
            <hr />
            <p className="lead">Don't repeat a click!</p>
        </div>
    </div>
)

export default Title;
