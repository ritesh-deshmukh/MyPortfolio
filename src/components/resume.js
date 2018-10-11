import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import Certifications from './certifications'

class Resume extends Component {
	render(){
		return(
				<div style={{background: "light grey"}}>
					<Grid >
						<Cell col={4}>
							<div style={{textAlign: "center"}}>
								<img src="https://bit.ly/2BXnjVS" alt="avatar" style={{height: "200px"}}/>
							</div>
							<h2 style={{paddingTop: "0.5em"}}>
								Ritesh Deshmukh
							</h2>
							<h4 style={{color: "grey"}}>
								Full Stack Developer
							</h4>
							<hr style={{orderTop: "3px solid #833FB2", width: "100%"}}/>
							<p>Computer Science Masters Graduate from the University of Texas at Arlington. 
									Minors: Database Systems and Computer Networks.
							</p>
							<hr style={{orderTop: "3px solid #833FB2", width: "100%"}}/>
							<h5>Address</h5>
							<p>127.0.0.1</p>
							<hr style={{orderTop: "3px solid #833FB2", width: "100%"}}/>
							<h5>Email</h5>
							<p>riteshsunildeshmukh@gmai.com</p>
							<hr style={{orderTop: "3px solid #833FB2", width: "100%"}}/>
							<h5>Phone</h5>
							<p>+1(469)954-4171</p>
							<hr style={{orderTop: "3px solid #833FB2", width: "100%"}}/>
							<h5>Web</h5>
				    		<a href="http://riteshd.com"
				    			target = "_blank" rel="noopener noreferrer">riteshd.com</a>
							<hr style={{orderTop: "3px solid #833FB2", width: "100%"}}/>
						</Cell>
						<Cell className="resume-right-col" col={8}>
							<h2 style={{lineHeight: "1px"}}>Education</h2>
							<Education 
								startYear={2011}
								endYear={2015}
								schoolName={"University of Texas at Arlington"}
								schoolDescription={"Master of Science in Computer Science"}
								/>
							<Education 
								startYear={2016}
								endYear={2018}
								schoolName={"University of Mumbai"}
								schoolDescription={"Bachelor of Engineering in Computer Engineering"}
								/>
							<hr style={{borderTop: "3px solid #e22947"}} />
							<h2 style={{lineHeight: "1px"}} >Experience</h2>
							<Experience 
								startYear={2015}
								endYear={2016}
								jobName={"Web Developer - Snoop Technologies"}
								jobDescription={"Designed websites for interactive platforms for E-learning and E-Commerce and enhanced UX by 30%"}
								/>
							<hr style={{borderTop: "3px solid #e22947"}} />
							<h2 style={{lineHeight: "1px"}}>Skills</h2>
							<Skills />
							<hr style={{borderTop: "3px solid #e22947"}} />							
							<h2 style={{lineHeight: "1px"}}>Certifications</h2>
							<Certifications 
								startYear={2018}
								endYear={2021}
								jobName={"Cisco Certified Entry Network Technician"}
								jobDescription={"Routing Protocols, VLANs, ACL, Cisco IOS CLI, Routers, Switches manual config."}
								/>
						</Cell>
					</Grid>
				</div>
			)
	}
}

export default Resume;