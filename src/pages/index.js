import React from "react"
import styling from "../styling/index.scss"
import starboardThumb from "../../assets/starboard-thumb-2.png"
import thumbCover from "../../assets/thumb-overlay.png"
import mriviewerThumb from "../../assets/mriviewer-thumb.png"
import { Helmet } from "react-helmet"
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import { Starboard } from "./starboard.js"
import starboardBanner from "/assets/starboard-project-banner.png"


/*const Starboard = () => {
	return (
		<div>
			<div>
				<img class="banner" src={starboardBanner}></img>
				<div class="project-banner-title">Starboard</div>
			</div>
			<Link to="/">
				<div class="project-p">
					back
				</div>
			</Link>
			
		</div>
		
	)
}*/

const App = () => {
	return (
		<div>
			<Helmet><title>Henry's Portfolio</title></Helmet>
			<Router basepath="/">
				<Navheader path="/"/>
				<Starboard path="/starboard"/>
			</Router>
		</div>
		
	)
}

class Navheader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {section: 0};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(newSection) {
		this.setState({section: newSection});
	};
	
	render() {
			let primaryContent;
			if (this.state.section == 0) {
				primaryContent = <ProjectGallery />;
			} else if (this.state.section == 1) {
				primaryContent = <About />
			}
			return (
				<div>
					<div class="navbar">
						<button className={this.state.section == 0 ? 'nav-selected' : 'nav'} onClick={() => this.handleClick(0)}>projects</button>
						<button className={this.state.section == 1 ? 'nav-selected' : 'nav'}  onClick={() => this.handleClick(1)}>about</button>
					</div>
					{primaryContent}
					<Footer />
				</div>
			)
	}
}

const ProjectGallery = () => {
	return (
		<div class="projects">
			<div class="project-holder">
				<div class="project-thumb-holder">
					<img src={starboardThumb} alt="Starboard" class="project-thumb"></img>
				</div>
				<div class="project-info">
					<div class="project-title">Starboard</div>
					<div class="project-desc">
						Open-world multiplayer survival game, featuring a complex base building system<br></br>
						<br></br>
						Made with C# in Unity
					</div>
				</div>
				<Link to="/starboard">
					<img src={thumbCover} class="project-overlay"></img>
				</Link>
			</div>
			<div class="project-holder">
				<div class="project-thumb-holder">
					<img src={mriviewerThumb} alt="MRIviewer" class="project-thumb"></img>
				</div>
				<div class="project-info">
					<div class="project-title">MRIviewer</div>
					<div class="project-desc">
						REU research project to mesh & visualize DTMRI scans of the heart
						<br></br><br></br>
						Made with C++ and OpenGL
					</div>
				</div>
				<img src={thumbCover} class="project-overlay"></img>
			</div>
		</div>
	)
}

const About = () => {
	return (
		<div class="about-holder">
			<div class="links">
				<a href="https://www.linkedin.com/in/henrywilliamsprogrammer/" target="_blank">LinkedIn</a>
				<br></br>
				<a href="https://github.com/jh-wi" target="_blank">Github</a>
			</div>
			<div class="about">
				Hi! I'm Henry. I'm a programmer. <br></br><br></br>
				I mostly dabble in websites, games, graphics, & physics, and I love writing high-performance code. I'm a fast learner and can pick up any technology quickly.<br></br><br></br>
				Here's what I'm already good at: <br></br>
				• JavaScript, HTML, CSS <br></br>
				• React, GatsbyJS, NodeJS <br></br>
				• C++, OpenGL <br></br>
				• C#, Unity3D <br></br>
				• Python
			</div>
		</div>
	)
}

const Footer = () => {
	return (
		<div>
			<div class="footer">made with GastbyJS • <a href="https://github.com/jh-wi/jh-wi.github.io/tree/source" target="_blank">source</a></div>
		</div>
	)
}

export default App