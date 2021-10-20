import "../styles/App.css";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPanel from "./Admin/AdminPanel";
import Trainers from "./Admin/Trainers";
import Header from "./Admin/Header";
import Footer from "./Admin/Footer";
import Trainees from "./Admin/Trainees";
import Videos from "./Admin/Videos";
import Subscriptions from "./Admin/Subscriptions";

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
            </Switch>
        </Router>
    );
};
export default App;
