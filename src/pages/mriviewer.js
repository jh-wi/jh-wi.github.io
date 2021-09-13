import * as React from "react"
import styling from "../styling/index.scss"
import { Router } from "@reach/router"
import { Link } from "gatsby"

const MRIviewer = () => {
	return (
		<div>
			<div class="misc">
				🚧 under construction 🚧
			</div>
			
			<Link to="/" style={{ textDecoration: "none" }}>
				<div class="back">
					<u>back to projects</u>
				</div>
			</Link>
		</div>
	)
}

export default MRIviewer