import * as React from "react"
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
				
			
		</div>
		
	)
}

export default Starboard