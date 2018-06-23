import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display: "flex"}}>
                        <p style={{width: "15%"}}>{ this.props.skill }</p>
                        <ProgressBar style={{margin: "auto", width: "40%"}} 
                        progress={ this.props.progress } />                        
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;