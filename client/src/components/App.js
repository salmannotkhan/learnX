import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Stream from "./Stream";
import Play from "./Play";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/play">
					<Play />
				</Route>
				<Route path="/stream">
					<Stream />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
