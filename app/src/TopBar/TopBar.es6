import React from "react";
import './TopBar.css'
import {
    NavLink
} from 'react-router-dom'

class TopBar extends React.Component {

    render() {
        return (
            <div className="top_fixed">
                <div className="top">
                    <div className="top_logo_container">
                        <NavLink to="/" exactclassName="top_logo_link">
                            <img className="top_logo" src="http://oq9er0rnu.bkt.clouddn.com/logo_top_revised.png"/>
                        </NavLink>
                    </div>
                    <ul className="top_nav">
                        <li><NavLink to="/chinese" exact activeClassName="selected">首页</NavLink></li>
                        <li><NavLink to="/chinese/core" activeClassName="selected">核心项目</NavLink></li>
                        <li><NavLink to="/chinese/service" activeClassName="selected">专业服务</NavLink></li>
                        <li><NavLink to="/chinese/cases" activeClassName="selected">合作伙伴及案例</NavLink></li>
                        <li><NavLink to="/chinese/about" activeClassName="selected">关于我们</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default TopBar;