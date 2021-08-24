import { v4 as uuidv4 } from 'uuid';

const Society = data =>

	<div className="col-12 col-md-6 col-lg-4 col-xl-3" key={uuidv4()}>
		<div className="card" style={{ width: "14rem" }}>
			<img
				className = "card-img-top p-2"
				src ={`${process.env.PUBLIC_URL}/images/societies/${data.society.name}.png`}
				alt ={`Société ${data.society.label}`}
			/>
			<div className="card-body">
				<h5 className="card-title">{data.society.label}</h5>
				<button className="position-absolute bottom-0 start-50 translate-middle badge rounded-pill bg-primary">Détails</button>
			</div>
		</div>
	</div>

export default Society