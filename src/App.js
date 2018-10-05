import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', overflow: 'auto', position: 'relative'}}>
        <Layout style={{background: 'url(https://bit.ly/2P9Vm0I) center / cover'}}>
            <Header className="header-color" transparent title="Title" style={{color: 'white'}}>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
              <div className="page-content">
                <Main />
              </div>
            <Content>
              
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
