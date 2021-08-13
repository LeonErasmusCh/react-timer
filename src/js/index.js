//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import PropTypes from "prop-types";
import "../styles/index.scss";

export function SimpleCounter(props) {
	return (
		<>
			<div className="container-fluid bg-dark">
				<div className="row justify-content-center p-3">
					<div className="display-2">
						<span className="badge bg-dark text-light m-1">
							<i className="far fa-clock"></i>
						</span>
					</div>
					<div className="display-2">
						<span className="badge bg-dark text-light m-1">
							{props.digitFour % 10}
						</span>
					</div>
					<div className="display-2">
						<span className="badge bg-dark text-light m-1">
							{props.digitThree % 10}
						</span>
					</div>
					<div className="display-2">
						<span className="badge bg-dark text-light m-1">
							{props.digitTwo % 10}
						</span>
					</div>
					<div className="display-2">
						<span className="badge bg-dark text-light m-1">
							{props.digitOne % 10}
						</span>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row justify-content-center">
						<button
							onClick={myStopFunction}
							type="button"
							class="btn btn-danger m-2">
							Stop Timer
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

let counter = 0;
const interval = setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	console.log(four, three, two, one);
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);

function myStopFunction() {
	clearInterval(interval);
}

SimpleCounter.PropTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number
};
