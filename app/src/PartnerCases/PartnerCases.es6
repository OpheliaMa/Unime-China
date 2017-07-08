import * as React from "react";
import "./PartnerCases.css"
import Footer from "../Footer/Footer";

class PartnerCases extends React.Component {
    render() {
        return (
            <div className="pc_container">
                <div className="pc_kv">
                </div>

                <div className="pc_content_container">
                    <div className="pc_content_container_inner pc_content_desc_container">
                        <h1 className="pc_content_title">合作伙伴及案例</h1>
                        <h2 className="pc_content_sub_title">我们的战略合作伙伴及合作项目</h2>

                        <div className="pc_content_desc">
                            <p>上海大学悉尼工商学院1+3国际本科项目【NZUP培养方向】</p>
                            <p>上海大学（莘远）出国留学服务中心【全国区域管理及项目统筹授权】</p>
                            <p>上海大学-巴黎国际时装艺术学院3+N国际本硕文凭项目</p>
                            <p>上海建桥学院国际交流生及UniMe Camp合作项目</p>
                            <p>安徽省亳州一中南校国际部【国际教育整体化运营管理】</p>
                        </div>
                    </div>


                    <div className={"pc_content_container_inner pc_content_data_container"}>
                        <h1 className="pc_content_title">案例资料</h1>
                        <div className="pc_content_desc">
                            <p>- 你升学之路上的重要概念和有价值资料 - </p>
                        </div>

                        <a className="pc_content_data_link" href="http://pan.baidu.com" target="_blank">
                            <img src="http://oq9er0rnu.bkt.clouddn.com/download.png"/>
                            <div className="pc_content_data_download_text">
                                点击此处，前往我们的百度云
                            </div>
                        </a>

                    </div>

                </div>

                <div className="pc_empty">
                </div>

                <Footer />
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

}

export default PartnerCases