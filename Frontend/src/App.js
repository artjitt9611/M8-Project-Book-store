import {Switch, Route} from "react-router-dom";
import "boxicons";
import GlobalStyle from "./GlobalStyle";
import Home from "./Page/Home";
import Registration from "./Compoents/Registration";
import NavBar from "./Compoents/Navbar";
import Favorite from "./Compoents/Favorite"
function App() {

	return (
		<>
			<GlobalStyle />
			<Switch>
			<Route path="/" exact>
			   <NavBar/>
					<Home/>
				</Route>
				<Route path="/favorite">
				<NavBar/>
					<Favorite/>
				</Route>
				
				<Route path="">
					<Registration />
				</Route>
				</Switch>
			
		</>
	);
}

export default App;
