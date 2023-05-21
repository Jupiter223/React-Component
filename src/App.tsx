import React, { Suspense, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Layout} from "./components"
import routes from "routes";
import {Home,PageNotFound} from "./pages"
function App() {
  // TODO:loading component
  return (
    <div className="App">
    <Router>
    <Layout>    
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
    {routes.map((route) => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        ))}
                         <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route>
                            <PageNotFound />
                        </Route>

    </Switch>


    </Suspense>
  
    </Layout>  
    </Router>
    </div>
  );
}

export default App;
