import React from 'react';
import "./CoreProjectItem.css"

class CoreProjectItem extends React.Component {
    render() {
        const {imageSrc, content} = this.props;
        return (
            <div className="project_content_item">
                <img src={imageSrc}/>
                {content}
            </div>
        );
    }
}

export default CoreProjectItem;