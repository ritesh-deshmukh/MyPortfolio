import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class Skills extends Component{
	render(){
		return(
				<div >
					<Grid>
						<Cell col={2}>
							<h4>Languages</h4>
							<li>Python</li>
							<li>JavaScript</li>
							<li>HTML</li>
							<li>CSS</li>
						</Cell>
						<Cell col={2}>
							<h4>Databases</h4>
							<li>MySQL</li>
							<li>PostgreSQL</li>
							<li>SQL Server</li>
							<li>NoSQL</li>
						</Cell>
						<Cell col={2}>
							<h4>Frameworks</h4>
							<li>React</li>
							<li>Flask</li>
							<li>Django</li>
							<li>Node</li>
							<li>UnitTest</li>
						</Cell>
						<Cell col={2}>
							<h4>Cloud</h4>
							<li>AWS</li>
							<li>MS Azure</li>
							<li>GCP</li>
							<li>IBM Bluemix</li>
						</Cell>
						<Cell col={2}>
							<h4>Tech</h4>
							<li>Git</li>
							<li>JMeter</li>
							<li>JUnit Framework</li>
						</Cell>
						<Cell col={2}>
							<h4>Networks</h4>
							<li>Wireshark</li>
							<li>Cisco IOS CLI</li>
							<li>Cisco Packet Tracer</li>
							<li>Riverbed Modeler</li>
						</Cell>
					</Grid>
				</div>
			)
	}
}

export default Skills;
