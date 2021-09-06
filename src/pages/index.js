import React from "react"
import styling from "../styling/index.scss"
import Layout from "../components/layout.js"
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

const Navheader = () => {
	return (
		<Layout>
			<button class="nav">projects</button>
			<button class="nav">about</button>
		</Layout>
	)
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

const Footer = () => {
	return (
		<div>
			<div class="footer">made with GastbyJS</div>
		</div>
	)
}

const IndexPage = () => {
	return (
		<div>
			<Navheader />
			<ProjectGallery />
			<Footer />
		</div>
	)
}

export default IndexPage
