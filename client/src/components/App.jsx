import "styles/App.css";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./admin/AdminPanel";
import Trainers from "./admin/Trainers";
import Header from "./admin/Header";
import Footer from "./admin/Footer";
import Trainees from "./admin/Trainees";
import Videos from "./admin/Videos";
import Subscriptions from "./admin/Subscriptions";
import UserHeader from "./user/UserHeader";
import CoursePage from "./user/CoursePage";
import UserProfile from "./user/UserProfile";
import Plan from "./user/Plan";
import UploadVideo from "./user/UploadVideo";

const App = () => {
	return (
		<section className="hero is-fullheight is-primary">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="register" element={<Register />} />

						<Route path="login" element={<Login />} />

						<Route path="admin" element={<Header />}>
							<Route index element={<AdminPanel />} />
							<Route path="trainers" element={<Trainers />} />
							<Route path="trainees" element={<Trainees />} />
							<Route path="videos" element={<Videos />} />
							<Route
								path="subscriptions"
								element={<Subscriptions />}
							/>
						</Route>

						<Route path="user" element={<UserHeader />}>
							<Route path="course" element={<CoursePage />} />
							<Route path="profile" element={<UserProfile />} />
							<Route path="plan" element={<Plan />} />
							<Route path="video" element={<UploadVideo />} />
						</Route>
						<Route path="*" element={<div>Not found</div>} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</section>
	);
};
export default App;
