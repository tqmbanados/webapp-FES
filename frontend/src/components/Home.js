import React, { Component } from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom"
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Logos from "./Logos.js";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<BrowserRouter>
            <div className="App">
              <Route
                path="/"
                render={({ location }) => (
                  <Fragment>
                    <Logos/>
                    <Tabs value={location.pathname} className="mainTabs" centered={true}>
                      <Tab 
                        label="Quienes Somos" 
                        component={Link} 
                        to="/" 
                      />
                      <Tab label="Información" component={Link} to="/info" />
                      <Tab label="Quiz!" component={Link} to="/quiz" />
                      <Tab
                        label="Foro"
                        href="#basic-tabs"
                        component={Link}
                        to="/foro"
                      />
                    </Tabs>
                    <Switch>
                      <Route path="/info" render={() => <div>Info General</div>} />
                      <Route path="/quiz" render={() => <div>Quiz</div>} />
                      <Route path="/foro" render={() => <div>Foro</div>} />
                      <Route path="/" render={() => <div>Info Frente</div>} />
                    </Switch>
                  </Fragment>
                )}
              />
            </div>
          </BrowserRouter>);
    }
}