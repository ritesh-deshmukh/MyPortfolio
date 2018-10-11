import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
	render(){
		return(
				<div className="contact-body">
					<Grid className="contact-grid">
						<Cell col={6}>
							<h2>Ritesh Deshmukh</h2>
							<img src="https://bit.ly/2NpGz0q" alt="avatar" style={{height: "250px"}} />
							<p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>Front End Enthusiast. Back End devotee. 
																									Love working on a Full Stack</p>
						</Cell>
						<Cell col={6}>
							<h2>Contact Me</h2>
							<hr/>
							<div className="contact-list">
								<List>
									<ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-phone-square" aria-hidden="true" />
									    		+1 (469) 954-4171
									    </ListItemContent>
									  </ListItem>
									  <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-home" aria-hidden="true" />
									    		127.0.0.1
									    </ListItemContent>
									  </ListItem>
									  <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-envelope" aria-hidden="true" />
									    		riteshsunildeshmukh@gmail.com
									    </ListItemContent>
									</ListItem>
									 <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-linkedin" aria-hidden="true" />{' '}
									    		<a href="https://www.linkedin.com/in/ritesh-deshmukh/"
									    			target = "_blank" rel="noopener noreferrer">ritesh-deshmukh</a>
									    </ListItemContent>
									</ListItem>
									 <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-twitter" aria-hidden="true" />
									    		<a href="https://twitter.com/ritesh_deshmukh"
									    			target = "_blank" rel="noopener noreferrer">ritesh_deshmukh</a>
									    </ListItemContent>
									</ListItem>
									 <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-facebook" aria-hidden="true" />&nbsp;&nbsp;&nbsp;&nbsp;
									    		<a href="https://www.facebook.com/riteshd.93"
									    			target = "_blank" rel="noopener noreferrer">riteshd.93</a>
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