import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Navigation from "./Navigation"

import "./Header.css"
import Logo from "../../images/logo.png"


const Header = () => {

	const [connected, setConnected] = useState(0)
	const [serverStatus, setServerStatus] = useState(false)

	const getJSON = function(url, callback) {

		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		
		xhr.onload = function() {
		
			var status = xhr.status;
			
			if (status == 200) {
				callback(null, xhr.response);
			} else {
				callback(status);
			}
		};
		
		xhr.send();
	};


	useEffect(() => {

		getJSON("http://70.53.151.192:30120/players.json", (err, data) => {
			if (err !== null) {

				setServerStatus(false)
				setConnected(0)
			} else {
				
				setServerStatus(true)
				setConnected(data.length)
			}
		})
	}, [])

	return(
		<header className="container mt-5">

			<div className="row">
				
				<div className="col-12 col-sm-3">
					<FontAwesomeIcon icon={faCoffee} />
				</div>
				
				<div className="col-12 col-sm-6 text-center">
					<img src={Logo} alt="Logo Evil Paradise" width="128" />
				</div>

				<div className="col-12 col-sm-3" id="serverStatus">
					
					<div className="row">
						<div className="col-6 col-sm-12">
							Server : <span className={`text-${serverStatus ? "success" : "secondary"}`}>
								{
									serverStatus
									?
										"En ligne"
									:
										"Éteint"
								}
							</span>
						</div>

						<div className="col-6 col-sm-12">
							<span className="text-right">
								Connectés : {connected} / 256
							</span>
						</div>

						
					</div>
					
				</div>

				<Navigation />
			</div>
		</header>
	)
}

export default Header