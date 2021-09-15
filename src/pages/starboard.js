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
				<iframe class="info-media" src='https://thumbs.gfycat.com/ResponsibleUnevenGelada-mobile.mp4' frameborder='0' border='0' scrolling='no' allowfullscreen width='640' height='360'></iframe>
				<div class="info-box">
					Starboard is a game I've been working on for over 5 years. It's a huge project that will hopefully be released in 2022!<br></br><br></br>
					The base building system is the center of gameplay in Starboard, and works by using sets of snapping points that define how different shapes of structures should be placed together.
				</div>
			</div>
			<div class="info-box-holder">
				<div class="info-box">
					Structure stability is calculated using a graph that propagates stability updates through connected structures. 
					This prevents structures from floating in the air when disconnected from the ground.<br></br><br></br>
					Here's a visualization structural of stability (red = unstable)
				</div>
				<iframe class="info-media" src='https://thumbs.gfycat.com/FatGaseousAsianporcupine-mobile.mp4' frameborder='0' border='0' scrolling='no' allowfullscreen width='640' height='360'></iframe>
			</div>
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