import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.backColor }}>
                <h1>Hello {this.props.studentName}</h1>
                <p>{this.props.age}</p>
            </div >
        );
    }
}

export default Title;