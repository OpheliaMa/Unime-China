/**
 * Created by xuyanjun on 17/7/2.
 */

import React from "react";
import "./ContactUs.css"

class ContactUs extends React.Component {

    render() {
        return (
            <div className="home_cont_us_container">
                <h6 className="home_cont_us_title">联系我们</h6>

                <div className="home_cont_us_content">
                    <p>地址：上海市黄浦区延安东路618号东海商业中心21F</p>
                    <p>联系电话：+86 21 8023 6022</p>
                    <p>电子邮箱：unime_china@163.com</p>
                    <p>官方网站：www.unime-china.org.cn</p>
                </div>
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default ContactUs;