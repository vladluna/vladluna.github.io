import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from './skills';

class Resume extends Component {
    render() {      
        return (
            <div>
                <Grid className="resume-grid">
                    <Cell col={4}>
                        <div style={{textAlign: "center"}}>
                            <img 
                                src="https://i.imgur.com/dbSG0aI.png"
                                alt="avatar"
                                style={{height: "200px"}}
                            />
                        </div>
                        <h2 style={{paddingTop: "2px"}}>Vladimir Luna</h2>
                        <h4 style={{color: "gray"}}>Programmer</h4>
                        <hr style={{borderTop: "3px solid #1C654A", width: "95%"}} />
                        <p>I'm normally not a praying man, but if you're up there, please save me, Superman.</p>
                        <h5>Location: <p>Bucaramanga, Colombia</p> </h5>                                          
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h3 style={{textAlign: ""}}>Education</h3>
                        <hr style={{borderTop: "3px solid #1C654A", width: "80%"}} />
                        
                        <Education 
                        startYear={2013} 
                        endYear={2014}
                        institutionName="Multitech"
                        title="Computer Technician"
                        />

                        <Education 
                        startYear={2014} 
                        endYear={2017}
                        institutionName="Fitec"
                        title="Informatic Services Technologist"
                        />

                        <Education 
                        startYear={2017} 
                        endYear={2019}
                        institutionName="Uniciencia"
                        title="Informatic Engineer"
                        />

                        <h3>Experience</h3>
                        <hr style={{borderTop: "3px solid #1C654A", width: "80%"}} />

                        <Experience 
                        startYear={2017} 
                        endYear={2019}
                        institutionName="Free Code Camp"
                        job="Student"
                        />

                        <h3>Skills</h3>
                        <hr style={{borderTop: "3px solid #1C654A", width: "80%"}} />

                        <Skills
                            skill="HTML/CSS"
                            progress={96}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={92}                             
                        />
                        <Skills
                            skill="NodeJS"
                            progress={85}
                        />
                        <Skills
                            skill="ReactJS"
                            progress={80}
                        />
                        <Skills
                            skill="MongoDB"
                            progress={75}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;


