import React, { Component } from "react";

import PortfolioItem from "../portfolio/portfolio-item";

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>

                <PortfolioItem/>
            </div>
        )
    }
}