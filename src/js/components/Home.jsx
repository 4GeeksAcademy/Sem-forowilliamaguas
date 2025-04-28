import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center d-flex justify-content-center flex-column align-items-center">
			<div className="palito"></div>
            <div className="semaforo">
				<div className="luz bg-danger "> </div>
				<div className="luz bg-warning brillo"> </div>
				<div className="luz bg-success "> </div>

			</div>

			
		</div>
	);
};

export default Home;