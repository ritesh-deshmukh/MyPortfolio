import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl'

class Certifications extends Component {
	render(){
		return(
				<Grid>
					<Cell col={3}>
						<p>{this.props.startYear} - {this.props.endYear}</p>
					</Cell>
					<Cell col={9}>
						<h4 style={{marginTop: "0px"}}>{this.props.jobName}</h4>
						<p style={{fontSize: "16px"}}>{this.props.jobDescription}</p>
					</Cell>
				</Grid>
			)
	}
}

export default Certifications;