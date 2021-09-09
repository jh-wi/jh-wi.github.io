import React from "react"
import styling from "../styling/index.scss"
import starboardThumb from "../../assets/starboard-thumb.png"
import thumbCover from "../../assets/thumb-overlay.png"
import mriviewerThumb from "../../assets/mriviewer-thumb.png"
import { Helmet } from "react-helmet"

class App extends React.PureComponent {
	render () {
		return (
			<Helmet><title>Henry's Portfolio</title></Helmet>
		)
	}
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
				<App />
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
				<img src={thumbCover} class="project-overlay"></img>
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
		<div></div>
	)
}

const Footer = () => {
	return (
		<div>
			<div class="footer">made with GastbyJS • <a href="https://github.com/jh-wi/jh-wi.github.io/tree/source" target="_blank">source</a></div>
		</div>
	)
}

export default Navheader