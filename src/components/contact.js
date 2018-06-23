import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";


class Contact extends Component {
    render() {      
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Vlad Luna</h2>
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/corporative-business/512/office_work-512.png"
                            alt="avatar"
                            style={{height: "250px"}}
                        />
                        <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>Now, now. Perfectly symmetrical violence never solved anything. 
                        Who am I making this out to? I guess if you want children beaten, you have to do it yourself.</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily: "Alegreya"}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        314-299-7313
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily: "Alegreya"}}>
                                        <i className="fas fa-envelope" aria-hidden="true"/>
                                        vladluna13@hotmail.com
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily: "Alegreya"}}>
                                        <i className="fab fa-discord" aria-hidden="true"/>
                                        zekashiifarmer#3548
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;