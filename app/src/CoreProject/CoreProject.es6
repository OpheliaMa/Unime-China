import * as React from "react";
import Footer from "../Footer/Footer";
import "./CoreProject.css"
import CoreProjectItem from "./CoreProjectItem";

const data = [
    {
        imageSrc: "http://oq9er0rnu.bkt.clouddn.com/project_item_nzup.png",
        content: (
            <div id="nzup_high">
                <h4 className="project_content_title">NZUP国际中学项目</h4>
                <p><br /></p>
                <p>NZUP是由新西兰公立大学预备教育协会委托上海大学悉尼工商学院进行学术培养，开设的国际中学课程</p>

                <h5 className="project_content_sub_title">招生对象</h5>
                <p>国内初高中在读学生</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">学术要求</h5>
                <p>1. 在校成绩认证+通过入学测试
                    初中在读生 – 数学英语平均成绩不低于85分（100分制）
                    高中在读生 – 数学英语平均成绩不低于75分（100分制）</p>
                <p><br /></p>

                <p>2. 不需要中考/高考成绩</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">学制（国内+国外）及就读校区</h5>
                <p>初中生：2+1 高中生：1+1 </p>
                <p><br /></p>
                <p>国内阶段就读：上海大学悉尼工商学院
                    <br/>
                    国外阶段就读：Abacus Institute of Studies (AIS)—UniMe直属学院</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">文凭及升学通道</h5>
                <p>1. NZUP毕业生将获得新西兰教育局颁布的高中毕业证</p>
                <p><br /></p>
                <p>2. 毕业申请全球名校，英联邦国家免雅思免预科 ，牛津大学、剑桥大学、麻省理工大学、斯坦福大学等</p>
                <p><br /></p>
                <p> 3. NZUP学员协议承诺所有毕业生100%获得新西兰八大录取通知书，90%以上毕业生进入奥克兰大学【世界排名相当于上海复旦大学</p>
                <p><br /></p>
                <p>4. NZUP 毕业生如选择留在新西兰，可以拿到新西兰永久居民身份，实现技术移民</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">学费：14.8万/年（国内外阶段统一费用）</h5>
                <p>国内阶段费用包含：学费、教材费、住宿费
                    <br />
                    国外阶段费用包含：学费</p></div>)
    },
    {
        imageSrc: "http://oq9er0rnu.bkt.clouddn.com/project_item_nzup.png",
        content: (
            <div id="nzup_prep">
                <h4 className="project_content_title">NZUP国际预科项目</h4>
                <p><br /></p>
                <h5 className="project_content_sub_title">招生对象</h5>
                <p>国内高中或同等学历毕业生（中专/职校/技校）</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">学术要求</h5>
                <p>1. 在校成绩认证+通过入学测试 数学英语平均成绩不低于75分（100分制）</p>
                <p><br /></p>
                <p>2. 不需要中考/高考成绩</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">学制及就读校区</h5>
                <p>学制：1年<br />
                    就读校区：Abacus Institute of Studies (AIS)—UniMe直属学院</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">文凭及升学通道</h5>
                <p>1. NZUP毕业生将获得新西兰教育局颁布的高中毕业证</p>
                <p><br /></p>
                <p>2. 毕业申请全球名校，英联邦国家免雅思免预科 ，牛津大学、剑桥大学、麻省理工大学、斯坦福大学等</p>
                <p><br /></p>
                <p> 3. NZUP学员协议承诺所有毕业生100%获得新西兰八大录取通知书，90%以上毕业生进入奥克兰大学【世界排名相当于上海复旦大学】</p>
                <p><br /></p>
                <p>4. NZUP 毕业生如选择留在新西兰，可以拿到新西兰永久居民身份，实现技术移民</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">学费：14.8万/年 </h5>
                <p>费用包含：学费</p>
            </div>)
    },
    {
        imageSrc: "http://oq9er0rnu.bkt.clouddn.com/project_item_3pn.png",
        content: (
            <div id="3pn">
                <h4 className="project_content_title">3+N国际本硕文凭项目</h4>
                <p><br /></p>
                <p>3+N国际本硕文凭项目是新西兰公立大学预备教育协会与上海大学-巴黎国际时装艺术学院合作搭建的双文凭国际本科/硕士文凭项目。</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">招生对象</h5>
                <p>国内高三在读/毕业（高中/中专/职校/技校）学生</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">学术要求</h5>
                <p>1. 在校成绩认证+通过入学测试<br />
                    数学英语平均成绩不低于75分（100分制）</p>
                <p><br /></p>
                <p>2. 不需要高考成绩但需保证持有高中毕业证（可延迟递交）</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">学制（国内+国外）及就读校区</h5>
                <p>国际本科文凭学制：3+1</p>
                <p>国际硕士文凭学制：3+2</p>
                <p><br /></p>
                <p>国内阶段就读：上海大学-巴黎国际时装艺术学院<br />
                    国外阶段就读：英国合作大学/新西兰NZIOS梅西大学</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">文凭及升学通道</h5>
                <p><br /></p>
                <h6>3+1国际本科文凭课程</h6>
                <p>上海大学巴黎国际时装艺术学院3年全日制本科课程+英国合作大学1年学士学位课程</p>
                <p><br /></p>
                <h6>3+2国际硕士文凭课程</h6>
                <p>上海大学巴黎国际时装艺术学院3年全日制本科课程+新西兰梅西大学2年硕士学位课程 </p>
                <p><br /></p>
                <p>以上各项目生毕业后获得双文凭（上海大学及海外合作院校毕业文凭），海外院校全部受到中国教育部官方认证</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">专业</h5>
                <p>3年全日制本科可选专业：服装设计、奢侈品营销管理、时尚传媒</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">移民通道</h5>
                <p>3+2国际硕士文凭课程毕业生如选择留在新西兰，可以拿到新西兰永久居民身份，实现技术移民</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">学费：14.8万/年（国内阶段）</h5>
                <p>国内阶段费用包含：学费、教材费、住宿费</p>
            </div>
        )
    },
    {
        imageSrc: "http://oq9er0rnu.bkt.clouddn.com/project_item_dbm.png",
        content: (
            <div id="dbm">
                <h4 className="project_content_title">专升硕-新西兰梅西大学硕士文凭项目</h4>
                <p><br /></p>
                <h5 className="project_content_sub_title">招生对象</h5>
                <p>国内大专在读/毕业学生（成人大专/函授皆可）</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">学术要求</h5>
                <p>通过英语入学测试</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">学制（国内+国外）及就读校区</h5>
                <p>学制：2年</p>
                <p>第1年就读校区：奥克兰NZIOS</p>
                <p>第2年就读校区：梅西大学（奥克兰校区、惠灵顿校区、北帕校区）</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">文凭及升学通道</h5>
                <p>第一年：新西兰NZIOS学院DBM Level 7文凭</p>
                <p>第二年：新西兰梅西大学硕士学位</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">专业</h5>
                <p>会计学、银行学、管理学、传媒学、经济学、市场学、金融学、人力资源管理学</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">移民通道</h5>
                <p>毕业生如选择留在新西兰，可以拿到新西兰永久居民身份，实现技术移民</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">学费：14.8万/年（第一年）</h5>
                <p>第一年费用包含：学费</p>
                <p>第二年费用：参考梅西大学收费标准</p>
            </div>
        )
    }
];

class CoreProject extends React.Component {

    render() {
        return (
            <div className="project_container">
                <div className="project_kv">
                </div>
                <div id="project_content_container" className="project_content_container">
                    <h1 className="project_title">CORE PROJECTS</h1>
                    <div className="project_content_list">
                        {data.map((item, index) => {
                            return <CoreProjectItem key={"item" + index} imageSrc={item.imageSrc}
                                                    content={item.content}/>
                        })}
                    </div>
                </div>
                <div id="project_empty" className="project_empty">
                </div>
                <Footer/>

            </div>
        );
    }

    componentDidMount() {
        var contentDocument = document.getElementById("project_content_container");
        var targetDocument = document.getElementById("project_empty");

        var anchor = window.location.hash;

        if (anchor) {
            var docId = anchor.replace("#", "");
            var targetToScroll;
            if (docId && (targetToScroll = document.getElementById(docId))) {
                targetToScroll.scrollIntoView();
                window.scrollBy(0, -100);
            } else {
                window.scrollTo(0, 0);
            }
        } else {
            window.scrollTo(0, 0);
        }

        this._calcEmptyHeight(contentDocument, targetDocument);
        document.body.onresize = function () {
            this._calcEmptyHeight(contentDocument, targetDocument);
        }.bind(this);
    }

    _calcEmptyHeight(contentDocument, targetDocument) {
        var paddingBottom = contentDocument.offsetHeight;
        targetDocument.style.paddingBottom = paddingBottom + 20 + "px";
    }

    componentWillUnmount() {
        document.body.onresize = null;
    }
}

export default CoreProject