import * as React from "react";
import Footer from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";
import "./AboutUs.css"

class AboutUs extends React.Component {
    render() {
        return (
            <div className="about_container">
                <div className="about_kv">
                </div>
                <div className="about_content_container">
                    <div className="about_content_desc">
                        <div>
                            <h1 className="about_content_title">关于新西兰公立大学预备教育协会 (UniMe)</h1>
                            <img src="http://oq9er0rnu.bkt.clouddn.com/about_logo1.png"
                                 className="about_content_logo1"/>
                        </div>
                        <p><br /></p>
                        <p>新西兰公立大学预备教育协会（UniMe）成立于2014年，是一家经新西兰教育部认证的官方国际性教育组织，
                            总部坐落在新西兰。UniMe自成立以来，始终致力于推进世界各国与新西兰教育文化的交流发展，为更多来自世
                            界各国的学生提供国际学生教育服务。</p>
                        <p><br /></p>
                        <p>为了向中国大陆地区的学生提供更多的国际教育优质资源及新西兰核心教育模式，UniMe China中国总部于
                            2014年成立，UniMe China 隽田国际作为UniMe在中国大陆地区唯一官方机构为中国学生在全球教育中取得高等
                            学历、精英教育及持续成功，提供全方位的学术及资源支持。</p>
                        <p><br /></p>
                        <p>UniMe直属管理数家新西兰公立中学及高等学院，每年的国际毕业生总数超过1000名，通往全球各地的知名
                            院校及新西兰本地的知名大学进行深造。</p>
                        <p><br /></p>
                        <div>
                            <h1 className="about_content_title">关于UniMe China隽田国际</h1>
                            <img src="http://oq9er0rnu.bkt.clouddn.com/about_logo2.png"
                                 className="about_content_logo2"/>
                        </div>
                        <p><br /></p>
                        <p>UniMe China隽田国际成立于2009年，专注于国际教育产业链布局，隶属于新西兰公立大学预备教育协会(UniMe),
                            是UniMe在中国大陆地区唯一官方机构。作为国际教育领域专业的资源引进及管理公司，隽田国际始终致力于提供最
                            优资源及整体化运营解决方案。</p>
                    </div>
                </div>

                <div className="about_empty"></div>
                <ContactUs/>
                <Footer/>
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default AboutUs