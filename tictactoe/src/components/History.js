import React from "react";

function History({ history, reverse }) {
	return (
		<div className="history">
			<h4>History</h4>
			<ul>
				{history.map((steps, move) => {
					const step = move ? "Go to step #" + move : "Go to the initial step";
					return (
						<li key={step}>
							<button onClick={() => reverse(move)}>{step}</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default History;
