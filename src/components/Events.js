import React from "react";

class Buttonclick extends React.Component {

    // State
    state = {
        content: 'Click Here',
        language: 'ReactJS'
    }

    //Function 
    // handleClick = (event) => {
    //     console.log(`you clicked on button ${this.state.language}`);
    // }

    //Recommend this syntax
    handleClick() {
        console.log(`you clicked on button ${this.state.language}`);
        this.setState({
            language: 'ReactJS by JS'
        })
    }


    // JSX
    render() {
        return (
            <>
                <p>This is event In {this.state.language} </p>
                {/* <button onClick={this.handleCLick}>{this.state.content}</button> */}
                {/* // call a func has created in class(object), we should use kw ' this' */}

                <button onClick={(event) => { this.handleClick(event) }}
                >{this.state.content}</button>
            </>
        )
    }
}

export default Buttonclick;