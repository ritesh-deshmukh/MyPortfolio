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
							<p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
							Explicabo labore, neque praesentium provident iste blanditiis saepe repudiandae necessitatibus nisi assumenda deleniti, dolorum error repellat.</p>
						</Cell>
						<Cell col={6}>
							<h2>Contact Me</h2>
							<hr/>
							<div className="contact-list">
								<List>
									<ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-phone-square" aria-hidden="true" />
									    		(xxx)xxx-xxxx
									    </ListItemContent>
									  </ListItem>
									  <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-home" aria-hidden="true" />
									    		(xxx)xxx-xxxx
									    </ListItemContent>
									  </ListItem>
									  <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-envelope" aria-hidden="true" />
									    		(xxx)xxx-xxxx
									    </ListItemContent>
									</ListItem>
									 <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-linkedin" aria-hidden="true" />
									    		(xxx)xxx-xxxx
									    </ListItemContent>
									</ListItem>
									 <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-twitter" aria-hidden="true" />
									    		(xxx)xxx-xxxx
									    </ListItemContent>
									</ListItem>
									 <ListItem>
									    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
									    	<i className="fa fa-facebook" aria-hidden="true" />
									    		(xxx)xxx-xxxx
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