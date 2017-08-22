import * as React from "react";
import './HomePage.css'
import Footer from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";
import NavLink from "react-router-dom/es/NavLink";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nzupSrc: "http://oq9er0rnu.bkt.clouddn.com/nzup_logo.png"
        };
    }

    _mouseOver() {
        this.setState({
            nzupSrc: "http://oq9er0rnu.bkt.clouddn.com/nzup_logo_selected.png"
        });
    }

    _mouseOut() {
        this.setState({
            nzupSrc: "http://oq9er0rnu.bkt.clouddn.com/nzup_logo.png"
        });
    }

    render() {
        return (
            <div className="homepage_container">
                <div className="homepage_kv">
                </div>


                <div className="homepage_gallery">
                    <NavLink to="/chinese/core#nzup_high" ref="nzupLogo" className="home_gal_item home_gal_nzup"
                             onMouseOver={this._mouseOver.bind(this)}
                             onMouseOut={this._mouseOut.bind(this)}>
                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://oq9er0rnu.bkt.clouddn.com/nzup.png"/>
                            <img className="home_gal_item_cover_indicator"
                                 src="http://oq9er0rnu.bkt.clouddn.com/icon_cover_indicator.png"/>
                        </div>

                        <div className="home_gal_item_des_container">
                            <div className="home_gal_item_des">
                                <p>NZUP国际中学项目</p>
                                <img className="nzup_logo" src={this.state.nzupSrc}/>
                            </div>
                        </div>

                    </NavLink>

                    <NavLink to="/chinese/core#nzup_prep" className="home_gal_item home_gal_3plusn">

                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://oq9er0rnu.bkt.clouddn.com/3plusn.png"/>
                            <img className="home_gal_item_cover_indicator"
                                 src="http://oq9er0rnu.bkt.clouddn.com/icon_cover_indicator.png"/>
                        </div>
                        <div className="home_gal_item_des_container">
                            <div className="home_gal_item_des">
                                <p>NZUP国际预科项目</p>
                            </div>
                        </div>

                    </NavLink>

                    <NavLink to="/chinese/core#3pn" className="home_gal_item home_gal_dbm">

                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://oq9er0rnu.bkt.clouddn.com/dbm.png"/>
                            <img className="home_gal_item_cover_indicator"
                                 src="http://oq9er0rnu.bkt.clouddn.com/icon_cover_indicator.png"/>
                        </div>
                        <div className="home_gal_item_des_container">
                            <div>
                                <div className="home_gal_item_des">
                                    <p>3+N国际本硕文凭项目</p>
                                </div>
                            </div>
                        </div>

                    </NavLink>

                    <NavLink to="/chinese/core#dbm" className="home_gal_item home_gal_elites">

                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://oq9er0rnu.bkt.clouddn.com/elites.png"/>
                            <img className="home_gal_item_cover_indicator"
                                 src="http://oq9er0rnu.bkt.clouddn.com/icon_cover_indicator.png"/>
                        </div>
                        <div className="home_gal_item_des_container">
                            <div className="home_gal_item_des">
                                <p>专升硕</p>
                                <p>新西兰梅西大学硕士文凭项目</p>
                            </div>
                        </div>

                    </NavLink>

                </div>


                <div className="home_registration">

                    <span className="home_reg_title">立即报名</span>

                    <span className="home_reg_title_indicator">&nbsp;</span>

                    <span className="home_reg_tips" id="reg_tips"></span>

                    <div className="home_reg_form">

                        <label className="home_reg_form_row">
                            <span className="home_reg_form_label">学生姓名</span>
                            <div className="home_reg_form_input">
                                <input id="reg_form_name" className="home_reg_form_input_container"/>
                            </div>
                        </label>

                        <label className="home_reg_form_row">
                            <span className="home_reg_form_label">学校</span>
                            <div className="home_reg_form_input">
                                <input id="reg_form_school" className="home_reg_form_input_container"/>
                            </div>
                        </label>

                        <label className="home_reg_form_row">
                            <span className="home_reg_form_label">年级</span>
                            <div className="home_reg_form_input">
                                <input id="reg_form_grade" className="home_reg_form_input_container"/>
                            </div>
                        </label>

                        <label className="home_reg_form_row">
                            <span className="home_reg_form_label">家长电话</span>
                            <div className="home_reg_form_input">
                                <input id="reg_form_mobile" className=" home_reg_form_input_container"/>
                            </div>
                        </label>

                        <label className="home_reg_form_row">
                            <div className="home_reg_form_input">
                                <div className="home_reg_reg_btn" onClick={this._doEnroll.bind(this)}>
                                    <a className="home_reg_reg_link">立即报名</a>
                                </div>
                            </div>
                        </label>

                    </div>


                </div>

                <ContactUs/>

                <Footer />

            </div>
        )
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    _doEnroll() {

        this._hideTips();

        let name = document.getElementById("reg_form_name").value;
        let school = document.getElementById("reg_form_school").value;
        let grade = document.getElementById("reg_form_grade").value;
        let mobile = document.getElementById("reg_form_mobile").value;

        if (!name) {
            this._showTips("请输入姓名");
            return;
        } else if (!school) {
            this._showTips("请输入所在学校");
            return;
        } else if (!grade) {
            this._showTips("请输入年级");
            return;
        } else if (!mobile) {
            this._showTips("请输入家长联系方式");
            return;
        }

        let result = fetch('http://localhost:8080/v1/enroll', {
            method: 'POST', body: JSON.stringify({
                name: name, school: school, grade: grade, parentPhone: mobile,
            })
        });

        result.then(function (response) {
            console.log('response', response)
            console.log('header', response.headers.get('Content-Type'))
            return response.json()
        }).then(function (data) {
            if (data) {
                if (data.code === 0) {
                    alert("提交成功，我们会尽快与您取得联系。")
                    this._clearForm();
                } else {
                    if (data.errorMessage) {
                        this._showTips(data.errorMessage);
                    } else {
                        this._showTips("未知错误");
                    }
                }
            } else {
                this._showTips("未知错误");
            }
        }.bind(this)).catch(function (ex) {
            this._showTips("未知错误");
        }.bind(this));
    }

    _showTips(tipText) {
        let tipDocument = document.getElementById("reg_tips");
        tipDocument.innerText = tipText;
    }

    _hideTips() {
        this._showTips("")
    }

    _clearForm() {
        document.getElementById("reg_form_name").value = "";
        document.getElementById("reg_form_school").value = "";
        document.getElementById("reg_form_grade").value = "";
        document.getElementById("reg_form_mobile").value = "";
    }
}

export default HomePage