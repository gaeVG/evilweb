import { useState, useEffect } from "react";

import "./Presentation.css"


const excludesAccounts =[
	"bank_savings", "pacific_deposit", "pacific_enterprise", "pacific_exchange",
	"society_gouv"
]

const Presentation = () => {

	const [societies, setSocieties] = useState([])

	useEffect(() => {
		let _societies =[]

		fetch("http://localhost:3002/api/societies").then(res => res.json()).then(res => {

			Object.entries(res).forEach(society => {
				
				if (!excludesAccounts.includes(society[1].name) && !society[1].name.match(society[1].name.match(/parking_\w+/g)))
					_societies.push(
						{
							name: society[1].name,
							label: society[1].label
						}
					)
				
			})

			setSocieties(_societies)
		});

	
	}, []);
	

	return (
		<main className="container" id="presentation">
			{
				societies
				?
					<div className="row">
						
						<div className="col-11 m-5">
							<h4 className="mb-3">
								Liste des sociétés de la ville:
							</h4>

							<div className="row">
								{
									societies.map(society =>
										<div class="col-3">
											<div className="card" style={{ width: "14rem" }}>
												<img
													className = "card-img-top p-2"
													src = {`${process.env.PUBLIC_URL}/images/societies/${society.name}.png`}
													alt = "Card image cap"
												/>
												<div className="card-body">
													<h5 className="card-title">{society.label}</h5>
													<button class="position-absolute bottom-0 start-50 translate-middle badge rounded-pill bg-primary">Détails</button>
												</div>
											</div>
										</div>
									)
								}
							</div>
						</div>

					</div>
					
				: null
			}
		</main>
	)
}

export default Presentation