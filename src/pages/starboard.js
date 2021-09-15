import React, { Suspense } from "react"
import styling from "../styling/index.scss"
import starboardBanner from "/assets/starboard-project-banner.png"
import { Router } from "@reach/router"
import { Link } from "gatsby"

const Starboard = () => {
	return (
		<div>
			<div>
				<img class="banner" src={starboardBanner}></img>
				<div class="project-banner-title">Starboard</div>
			</div>
			<Link to="/" style={{ textDecoration: "none" }}>
				<div class="back">
					<u>back to projects</u>
				</div>
			</Link>
			<div class="info-box-holder">
				<iframe class="info-media" src='https://thumbs.gfycat.com/UnnaturalFavoriteBug-mobile.mp4' frameborder='0' border='0' scrolling='no' allowfullscreen width='640' height='360'></iframe>
				<div class="info-box">
					Procedural animation is used with most creatures in Starboard to allow for more dynamic and natural body movements.<br></br><br></br>
					For example, legs that use inverse kinematics to adapt to terrain and adjust to support a desired body position & rotation.<br></br><br></br>
					This crab is animated entirely through code!
				</div>
			</div>
			<div class="info-box-holder">
				<div class="info-box">
					Game state can be saved & loaded with binary file I/O, here's a visualization of saved structure loading
				</div>
				<iframe class="info-media" src='https://thumbs.gfycat.com/BeautifulInferiorFerret-mobile.mp4' frameborder='0' border='0' scrolling='no' allowfullscreen width='640' height='360'></iframe>
			</div>
			
		</div>
		
	)
}

export default Starboard