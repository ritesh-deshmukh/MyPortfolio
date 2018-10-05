import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
	render(){
		return(
				<div style={{width: '100%', margin: 'auto'}}>
					<Grid className = "landing-grid">
						<Cell col={12}>
							<img 
								src="https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png"
								alt="avatar"
								className="avatar-img"
								 />							
						</Cell>
						<div className = "banner-text">
							<h1>Banner Test</h1>
							<hr/>
							<p>TEST | TEST | TEST | TEST | TEST | TEST | TEST | TEST </p>
							<div className = "social-links">
								{/* LinkedIn */}
								<a href="https://www.google.com/" target = "_blank" rel="noopener noreferrer">
									<i className="fa fa-linkedin-square" aria-hidden="true"></i>
								</a>
								{/* GitHub */}
								<a href="https://www.google.com/" target = "_blank" rel="noopener noreferrer">
									<i className="fa fa-github-square" aria-hidden="true"></i>
								</a>
								{/* Twitter */}
								<a href="https://www.google.com/" target = "_blank" rel="noopener noreferrer">
									<i className="fa fa-twitter-square" aria-hidden="true"></i>
								</a>

							</div>
						</div>
					</Grid>
					
				</div>
			)
	}
}

export default LandingPage;