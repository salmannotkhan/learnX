import "styles/App.css";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./admin/AdminPanel";
import Trainers from "./admin/Trainers";
import AdminLayout from "./admin/AdminLayout";
import Trainees from "./admin/Trainees";
import Videos from "./admin/Videos";
import Subscriptions from "./admin/Subscriptions";
import UserLayout from "./user/UserLayout";
import CoursePage from "./user/CoursePage";
import UserProfile from "./user/UserProfile";
import Plan from "./user/Plan";
import UploadVideo from "./user/UploadVideo";
import VideoStream from "./user/VideoStream";
import LiveInstructions from "./user/LiveInstructions";

const App = () => {
	return (
		<section className="hero is-fullheight is-primary">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="register" element={<Register />} />

						<Route path="login" element={<Login />} />

						<Route path="admin" element={<AdminLayout />}>
							<Route index element={<AdminPanel />} />
							<Route path="trainers" element={<Trainers />} />
							<Route path="trainees" element={<Trainees />} />
							<Route path="videos" element={<Videos />} />
							<Route
								path="subscriptions"
								element={<Subscriptions />}
							/>
						</Route>

						<Route path="user" element={<UserLayout />}>
							<Route path="course" element={<CoursePage />} />
							<Route
								path="course/:videoId"
								element={<VideoStream />}
							/>
							<Route path=":userId" element={<UserProfile />} />
							<Route path="plan" element={<Plan />} />
							<Route path="video" element={<UploadVideo />} />
							<Route
								path="instructions"
								element={<LiveInstructions />}
							/>
						</Route>
						<Route path="*" element={<div>Not found</div>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</section>
	);
};
export default App;
