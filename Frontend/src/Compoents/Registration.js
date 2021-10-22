import React from "react";
import {Switch, Route} from "react-router-dom";
import Container from "./ContainerForLogin";
import Login from "./Login";


export default function Registration() {
	return (
		<Switch>
			<Route path="/login">
				<Container>
					<Login />
				</Container>
			</Route>
		</Switch>
	);
}
