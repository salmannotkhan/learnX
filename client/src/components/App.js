import "../styles/App.css";
import Register from "./Register";
import Login from "./Login";
import AdminPanel from "./Admin/AdminPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewTrainers from "./Admin/ViewTrainers";
import Header from "./Admin/Header";
import Footer from "./Admin/Footer";
import ViewTrainees from "./Admin/ViewTrainees";
import ViewVideos from "./Admin/ViewVideos";
import ViewSubscriptions from "./Admin/ViewSubscriptions";

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

                <Route path="/adminpanel">
                    <Header />
                    <AdminPanel />
                    <Footer />
                </Route>

                <Route path="/viewtrainers">
                    <Header />
                    <ViewTrainers />
                    <Footer />
                </Route>

                <Route path="/viewtrainees">
                    <Header />
                    <ViewTrainees />
                    <Footer />
                </Route>

                <Route path="/viewvideos">
                    <Header />
                    <ViewVideos />
                    <Footer />
                </Route>

                <Route path="/viewsubscriptions">
                    <Header />
                    <ViewSubscriptions />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    );
};
export default App;
