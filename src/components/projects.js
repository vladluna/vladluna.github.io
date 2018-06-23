import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        switch(this.state.activeTab) {
            case 0:
                return (
                    <div className="projects-grid">
                        { /* Project 1 */ }
                        <Card shadow={5} style={{minWidth: "400", margin: "auto"}}>
                            <CardTitle style={{color: "#fff", height: "200px", background: "url(https://d81pi4yofp37g.cloudfront.net/wp-content/uploads/react.png) center / cover"}}>React Project #1</CardTitle>
                            <CardText>
                                Good news, everyone! There's a report on TV with some very bad news! We'll go deliver this crate like professionals, and then we'll go home.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: "#fff"}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        { /* Project 2 */ }
                        <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                            <CardTitle style={{color: "#fff", height: "200px", background: "url(https://d81pi4yofp37g.cloudfront.net/wp-content/uploads/react.png) center / cover"}}>React Project #1</CardTitle>
                            <CardText>
                                With gusto. When the lights go out, it's nobody's business what goes on between two consenting adults. Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: "#fff"}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        { /* Project 3 */ }
                        <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                            <CardTitle style={{color: "#fff", height: "200px", background: "url(https://d81pi4yofp37g.cloudfront.net/wp-content/uploads/react.png) center / cover"}}>React Project #1</CardTitle>
                            <CardText>
                            e need rest. The spirit is willing, but the flesh is spongy and bruised. You guys go on without me! I'm going to go… look for more stuff to steal! Oh right. I forgot about the battle.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: "#fff"}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                )
            case 1:
                return (<div><h1>Angular</h1></div>)
            case 2:
                return (<div><h1>Vue</h1></div>)
            case 3:
                return (<div><h1>MongoDB</h1></div>)
            default:
                return (<div><h1>Please select a tab</h1></div>);
        }
    }
    render() {      
        return (
    <div className="category-tabs">
        <Tabs activeTab={ this.state.activeTab } onChange={(tabId) =>  this.setState({ activeTab: tabId })} ripple>
            <Tab>React</Tab>
            <Tab>Angular</Tab>
            <Tab>Vue</Tab>
            <Tab>MongoDB</Tab>
        </Tabs>        

            <Grid>
                <Cell col={12}>
                    <div className="content">{ this.toggleCategories() }</div>
                </Cell>
            </Grid>
    </div>
        )
    }
}

export default Projects;