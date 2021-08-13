import React from "react";
//import { ProgressPlugin } from "webpack";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<h1 className="display-2">
						<span className="badge bg-dark text-light m-1">
							{props.digit1}
						</span>
					</h1>
				</div>
			</div>
		</>
	);
}

