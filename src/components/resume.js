import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
	render(){
		return(
				<div>
					<Grid>
						<Cell col={4}>
							<div style={{textAlign: "center"}}>
								<img src="https://bit.ly/2BXnjVS" alt="avatar" style={{height: "200px"}}/>
							</div>
							<h2 style={{paddingTop: "0.5em"}}>
								Ritesh Deshmukh
							</h2>
							<h4 style={{color: "grey"}}>
								Profession
							</h4>
							<hr style={{orderTop: "3px solid #833FB2", width: "50%"}}/>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
								Nemo doloribus, saepe dolores nulla repellat repellendus facere consequuntur totam distinctio ratione.
							</p>
							<hr style={{orderTop: "3px solid #833FB2", width: "50%"}}/>
							<h5>Address</h5>
							<p>1 addressway address 12345</p>
							<h5>Email</h5>
							<p>example@example.com</p>
							<h5>Phone</h5>
							<p>(xxx)xxx-xxxx</p>
							<h5>Web</h5>
							<p>MyWebsite.com</p>
							<hr style={{orderTop: "3px solid #833FB2", width: "50%"}}/>
						</Cell>
						<Cell className="resume-right-col" col={8}>
							<h2>Education</h2>
							<Education 
								startYear={2011}
								endYear={2015}
								schoolName={"My University"}
								schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
								/>
							<Education 
								startYear={2016}
								endYear={2018}
								schoolName={"My University 2"}
								schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
								/>
							<hr style={{borderTop: "3px solid #e22947"}} />
							<h2>Experience</h2>
							<Experience 
								startYear={2015}
								endYear={2016}
								jobName={"Job Name"}
								jobDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
								/>
							<hr style={{borderTop: "3px solid #e22947"}} />
							<h2>Skills</h2>
							<Skills />
						</Cell>
					</Grid>
				</div>
			)
	}
}

export default Resume;