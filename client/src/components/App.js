import "../styles/App.css";
import Register from "./Register";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewTrainers from "./ViewTrainers";
import Header from "./Header";
import Footer from "./Footer";
import ViewTrainees from "./ViewTrainees";
import ViewVideos from "./ViewVideos";
import ViewSubscriptions from "./ViewSubscriptions";

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
