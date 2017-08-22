/**
 * Created by xuyanjun on 17/5/8.
 */

import React from 'react'
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import TopBar from "./TopBar/TopBar";
import HomePage from "./HomePage/HomePage"
import CoreProject from "./CoreProject/CoreProject";
import ProService from "./ProService/ProService";
import PartnerCases from "./PartnerCases/PartnerCases";
import AboutUs from "./AboutUs/AboutUs";
import "./App.css"

class UniMe extends React.Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <TopBar />
                    <Switch>
                        <Route exact path="/chinese/" component={HomePage}/>
                        <Route path="/chinese/core" component={CoreProject}/>
                        <Route path="/chinese/service" component={ProService}/>
                        <Route path="/chinese/cases" component={PartnerCases}/>
                        <Route path="/chinese/about" component={AboutUs}/>
                        <Route component={HomePage}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}

ReactDOM.render(
    <UniMe name="World"/>,
    document.getElementById("container")
);