const Vehicle = data =>

	<div className="col-12 col-md-6 col-lg-4 col-xl-3">
		<div className="card" style={{ width: "14rem" }}>
			<img
				className = "card-img-top p-2"
				src ={`https://wiki.gtanet.work/images/${data.vehicle.image}.png`}
				alt ={`Société ${data.vehicle.name}`}
			/>
			<div className="card-body">
				<h5 className="card-title">{data.vehicle.name}</h5>

				<button
					className="position-absolute bottom-0 start-50 translate-middle badge rounded-pill bg-primary"
				>
					Acheter
				</button>
			</div>
		</div>
	</div>

export default Vehicle