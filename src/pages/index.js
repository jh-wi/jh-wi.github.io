import React from "react"
import ReactDOM from "react-dom"
import styling from "../styling/index.scss"
import Layout from "../components/layout.js"
import starboardThumb from "../../assets/starboard-thumb.png"
import thumbCover from "../../assets/thumb-overlay.png"
import mriviewerThumb from "../../assets/mriviewer-thumb.png"
import { Helmet } from "react-helmet"

let globalSection = 0;

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
		globalSection = this.state.section;
	};
	
	render() {
		let primaryContent;
		if (this.state.section == 0) {
			primaryContent = <ProjectGallery />;
		} else if (this.state.section == 1) {
			primaryContent = <About />
		}
		return (
			//<Layout>
			<div>
				<div class="navbar">
					<button className={this.state.section == 0 ? 'nav-selected' : 'nav'} onClick={() => this.handleClick(0)}>projects</button>
					<button className={this.state.section == 1 ? 'nav-selected' : 'nav'}  onClick={() => this.handleClick(1)}>about</button>
				</div>
				{primaryContent}
				<Footer />
			</div>
			
			//</Layout>
		)
	}
}

/*const Navheader = () => {
	return (
		<Layout>
			<button class="nav-selected">projects</button>
			<button class="nav">about</button>
		</Layout>
	)
}*/

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
						Multiplayer survival game
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
						REU research project to model & visualize DTMRI scans of the heart
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
		<div>hey there</div>
	)
}

const Footer = () => {
	return (
		<div>
			<div class="footer">made with GastbyJS</div>
		</div>
	)
}

/*class IndexPage extends React.Component {
	render() {
		return (
			<Navheader />
		)
	}
}

ReactDOM.render(
	<IndexPage />,
	document.getElementById("root")
);*/

const IndexPage = () => {
	if (globalSection == 0) {
		return (
			<div>{globalSection}
				<Navheader />
				<ProjectGallery />
				<Footer />
			</div>
		)
	} else {
		return (
			<div>{globalSection}
				<Navheader />
				<Footer />
			</div>
		)
	}
}

export default Navheader