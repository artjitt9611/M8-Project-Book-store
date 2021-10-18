import {Switch, Route} from "react-router-dom";
import "boxicons";
import GlobalStyle from "./GlobalStyle";
import Home from "./Page/Home";
import Registration from "./Compoents/Registration";
import NavBar from "./Compoents/Navbar";

function App() {

	return (
		<>
			<GlobalStyle />
			<Switch>
			<Route path="/home">
			   <NavBar />
					<Home/>
				</Route>
		
			<Route path="/login">
					<Registration/>
				</Route>
				</Switch>
			
		</>
	);
}

export default App;
