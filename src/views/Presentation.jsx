import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import Society from "../components/Society";
import Vehicle from "../components/Vehicle";

import "./Presentation.css"


const excludesAccounts =[
	"bank_savings", "pacific_deposit", "pacific_enterprise", "pacific_exchange", "property_black_money",
	"society_gouv",
]

const Presentation = () => {

	const [societies, setSocieties] = useState([])
	const [categories, setCategories] = useState([])
	const [vehicles, setVehicles] = useState([])

	let match = useRouteMatch("/presentation/:society");

	console.log(match)

	useEffect(() => {
		let _societies =[]
		let _categories =[]
		let _vehicles =[]

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

		fetch("http://localhost:3002/api/vehicles/sales").then(res => res.json()).then(res => {

			Object.entries(res).forEach(vehiclesSales => {
				_categories.push(vehiclesSales[0]);
				
				if (vehiclesSales[1].length > 0) {

					vehiclesSales[1].map(vehicle => {
						console.log("vehicle : ", vehicle)
						_vehicles.push(
							{
								model : vehicle.model,
								name : vehicle.name,
								price : vehicle.price,
								category : vehiclesSales[0],
								image : vehicle.image
							}
						)
					});
				}
			})
			console.log(_vehicles)
			setCategories(_categories)
			setVehicles(_vehicles)
		});

	
	}, []);	

	return (
		<main className="container" id="presentation">
			<div className="row">

				{
					societies
					?
						<div className="col-11 m-5">
							<h3 className="mb-3">Liste des sociétés de la ville:</h3>

							<div className="row">
								{
									societies.map(society =>
										<Society society={society} key={uuidv4()} />
									)
								}
							</div>
						</div>		
					: null
				}

				{
					categories && vehicles
					?
						<div className="col-11 m-5">
							<h3>Liste des véhicles en vente:</h3>

							<ul>
								{
								categories.map(category =>

										<div>
											<h4>{category}</h4>

											<div className="row">
											{
													vehicles.map(vehicle => 

														vehicle.category === category
														?
															<Vehicle vehicle={vehicle} key={uuidv4()} />
														:
															null											
													)
												}
											</div>
										</div>
								)
							}
							</ul>
						</div>
					:
						null
				}

			</div>
		</main>
	)
}

export default Presentation