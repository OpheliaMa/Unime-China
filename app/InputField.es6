import React from "react";
import style from './InputField.css'

class InputField extends React.Component {

    render() {
        const { ph } = this.props;
        return <input type="text" placeholder={ph} className={style.className}/>
    }
}

InputField.propTypes = {
    ph: React.PropTypes.string
}

InputField.defaultProps = {
    ph: "请输入"
}

export default InputField;