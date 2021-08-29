import './App.css';
import Layout from "components/UI/Layout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "components/Home";
import About from "components/About";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route component={About} path="/about"></Route>
                    <Route component={Home} path="/"></Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
