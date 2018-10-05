import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl'

class Projects extends Component {
	constructor(props){
		super(props)
		this.state = {
			activeTab: 0
		}		
	}

	toggleCategories() {
		if (this.state.activeTab === 0) { 
			return (
						<div className="projects-grid">
							{/* Project 1 */}
							<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
								<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://bit.ly/2CqWryB) center/cover'}}>
									Project #1`
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
									Cupiditate recusandae pariatur eos ducimus laudantium ipsam numquam iure. 
									Provident illum ipsam sint deserunt aut perspiciatis quod, modi adipisci, maiores aspernatur nemo!
								</CardText>					
								<CardActions border>
									<Button colored>GitHub</Button>
									<Button colored>Live Demo</Button>
								</CardActions>
								<CardMenu style={{color: '#fff'}}>
									<IconButton name="share" />
								</CardMenu>
							</Card>

							{/* Project 2 */}
							<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
								<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://bit.ly/2CqWryB) center/cover'}}>
									Project #
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
									Cupiditate recusandae pariatur eos ducimus laudantium ipsam numquam iure. 
									Provident illum ipsam sint deserunt aut perspiciatis quod, modi adipisci, maiores aspernatur nemo!
								</CardText>					
								<CardActions border>
									<Button colored>GitHub</Button>
									<Button colored>Live Demo</Button>
								</CardActions>
								<CardMenu style={{color: '#fff'}}>
									<IconButton name="share" />
								</CardMenu>
							</Card>

							
							{/* Project 3 */}
							<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
								<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://bit.ly/2CqWryB) center/cover'}}>
									Project #3
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
									Cupiditate recusandae pariatur eos ducimus laudantium ipsam numquam iure. 
									Provident illum ipsam sint deserunt aut perspiciatis quod, modi adipisci, maiores aspernatur nemo!
								</CardText>					
								<CardActions border>
									<Button colored>GitHub</Button>
									<Button colored>Live Demo</Button>
								</CardActions>
								<CardMenu style={{color: '#fff'}}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</div>
					)
		}
		// else if (this.state.activeTab === 1) { return (<div><h1>Topic 2</h1></div>) }
		// else if (this.state.activeTab === 2) { return (<div><h1>Topic 3</h1></div>) }
		// else if (this.state.activeTab === 3) { return (<div><h1>Topic 4</h1></div>) }		
	}
	render(){
		return(
				<div className="category-tabs">
					<Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({activeTab: tabId})} ripple>
						<Tab>Topic 1</Tab>
						<Tab>Topic 2</Tab>
						<Tab>Topic 3</Tab>
						<Tab>Topic 4</Tab>
					</Tabs>					
					<Grid>
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>								
				</div>
			)
	}
}

export default Projects;