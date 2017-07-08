import * as React from "react";
import './ProService.css'
import Footer from "../Footer/Footer";

class ProService extends React.Component {
    render() {
        return (
            <div className="service_container">
                <div className="service_kv">
                </div>

                <div className="service_content_container">

                    <div className="service_content_container_inner">
                        <h1 className="service_content_title">服务</h1>
                        <div className="service_content_desc">
                            <p>国际教育整体化运营管理</p>
                            <p>国际标准/同步课程引进</p>
                            <p>国际社团/俱乐部/增益课程引进管理</p>
                            <p>外国专家引进管理</p>
                            <p>国际升学指导&考学指导引进管理</p>
                            <p>国际体育文化交流项目引进管理</p>
                        </div>

                        <img src="http://oq9er0rnu.bkt.clouddn.com/icon_service_pen.png"/>
                    </div>

                </div>

                <div className="service_empty">

                </div>

                <Footer />
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default ProService