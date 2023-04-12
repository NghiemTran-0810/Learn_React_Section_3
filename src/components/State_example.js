import React from "react";
class StateExample extends React.Component {
    // State 
    state = {
        name: 'shuu',
        age: 26,
        address: '123 ma_may street'
    }
    // JSX
    render() {
        return (
            <p>{this.state.name} live in {this.state.address}</p>

        )
    }
}

export default StateExample;