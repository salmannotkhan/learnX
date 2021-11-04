import React from "react";

export default function Plan() {
	return (
		<div className="hero-body">
			<form action="/payment/checkout" method="POST">
				<input type="hidden" name="plan" value="monthly" />
				<button className="button">Monthly</button>
			</form>
			<form action="/payment/checkout" method="POST">
				<input type="hidden" name="plan" value="tri-monthly" />
				<button className="button">Tri-monthly</button>
			</form>
			<form action="/payment/checkout" method="POST">
				<input type="hidden" name="plan" value="yearly" />
				<button className="button">Yearly</button>
			</form>
		</div>
	);
}
