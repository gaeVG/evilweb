import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import Navigation from "./Navigation"

import "./Header.css"
import Logo from "../../images/logo.png"
const Header = () => {

	return(
		<header>
			<div className="container mt-3">
				<div className="row">
					<div className="col-3">
						<FontAwesomeIcon icon={faCoffee} />
					</div>
					
					<div className="col-6 text-center">
						<img src={Logo} width="128" />
					</div>
					<div className="col-3">
						<ul>
							<li className="px-1"><FontAwesomeIcon icon={["fal", "coffee"]} /></li>
						</ul>
					</div>
				</div>

				<div className="container mt-3">
					<Navigation />
				</div>
			</div>
		</header>
	)
}

export default Header