import "../styles/App.css";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPanel from "./admin/AdminPanel";
import Trainers from "./admin/Trainers";
import Header from "./admin/Header";
import Footer from "./admin/Footer";
import Trainees from "./admin/Trainees";
import Videos from "./admin/Videos";
import Subscriptions from "./admin/Subscriptions";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/register">
					<Register />
				</Route>

				<Route path="/login">
					<Login />
				</Route>

				<Route path="/admin/panel">
					<Header />
					<AdminPanel />
					<Footer />
				</Route>

				<Route path="/admin/trainers">
					<Header />
					<Trainers />
					<Footer />
				</Route>

				<Route path="/admin/trainees">
					<Header />
					<Trainees />
					<Footer />
				</Route>

				<Route path="/admin/videos">
					<Header />
					<Videos />
					<Footer />
				</Route>

				<Route path="/admin/subscriptions">
					<Header />
					<Subscriptions />
					<Footer />
				</Route>

				<Route>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};
export default App;
