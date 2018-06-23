import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{ this.props.startYear } - { this.props.endYear }</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: "1px"}}>{ this.props.institutionName }</h4>
                    <p>Job: { this.props.job }</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;