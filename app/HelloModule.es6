import React from 'react'

class Hello extends React.Component {
    render() {
        return (
            <div>
                Hello World, {this.props.name}!
            </div>
        )
    }
}

export { Hello as HelloModule }
