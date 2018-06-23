import React, { Component } from 'react';
import { Grid, Cell} from "react-mdl";


class Landing extends Component {
    render() {      
        return (
    <div style={{width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
            <Cell col={12}>

            <img src="https://i.imgur.com/1W6qAk8.png"
            alt="avatar"
            className="avatar-img"
            />
            
            <div className="banner-text">
            <h1>Web Developer</h1>
            <hr/>

            <p>HTML/CSS | Responsive Design | JavaScript | NodeJS | ReactJS | MongoDB</p>
            
            <div className="social-links">
                { /* FCC */ }
                <a href="" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-free-code-camp" aria-hidden="true" />
                </a>
                { /* Github */ }
                <a href="" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" aria-hidden="true" />
                </a>
                { /* LinkedIn */ }
                <a href="" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                { /* Facebook */ }
                <a href="" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook" aria-hidden="true" />
                </a>
            </div>


            </div>
            </Cell>
        </Grid>
    
    </div>
        )
    }
}

export default Landing;