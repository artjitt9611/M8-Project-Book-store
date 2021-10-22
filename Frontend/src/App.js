import {Switch, Route} from "react-router-dom";
import "boxicons";
import GlobalStyle from "./GlobalStyle";
import Home from "./Page/Home";
import Registration from "./Compoents/Registration";
import NavBar from "./Compoents/Navbar";
import Favorite from "./Compoents/Favorite"
import BookDetail from "./Compoents/BookDetail";
import Cart from "./Compoents/Cart";
function App() {

	return (
		<>
			<GlobalStyle />
			<Switch>
			<Route path="/" exact>
			   <NavBar/>
					<Home/>
				</Route>

				<Route path="/cart">
				<NavBar/>
					<Cart/>
				</Route>

				<Route path="/User/BookDetail/:id">
				<NavBar/>
					<BookDetail/>
				</Route>
				
				<Route path="">
					<Registration />
				</Route>
				</Switch>
			
		</>
	);
}

export default App;
