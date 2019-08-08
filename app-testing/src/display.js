import React from 'react';

 class Display extends React.Component {
    render() {
        return (
        <>
            <div data-testid="strikes">Strike: {this.props.strikes}</div>
            <div data-testid="balls">Ball: {this.props.balls}</div>
        </>
        )
    }
}

 export default Display; 