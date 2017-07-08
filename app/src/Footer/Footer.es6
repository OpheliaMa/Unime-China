/**
 * Created by xuyanjun on 17/5/17.
 */

import React from "react";
import './Footer.css'
import {
    NavLink
} from 'react-router-dom'

class Footer extends React.Component {

    render() {
        return (
            <div className="home_footer">

                <div className="home_footer_nav_container">
                    <div className="home_footer_logo_container">
                        <img className="home_footer_logo" src="http://oq9er0rnu.bkt.clouddn.com/logo_bottom.png"/>
                    </div>
                    <div className="home_footer_nav">
                        <div className="home_footer_nav_text"><NavLink to="/" exact activeClassName="selected">主页</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/core" activeClassName="selected">核心项目</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/service" activeClassName="selected">专业服务</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/cases" activeClassName="selected">合作伙伴及案例</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/about" activeClassName="selected">关于我们</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/">中文版</NavLink></div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Footer;