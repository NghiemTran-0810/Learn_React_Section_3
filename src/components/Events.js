import React from "react";

class Buttonclick extends React.Component {

    // State
    state = {
        content: 'Click Here',
        language: 'ReactJS'
    }

    //Function 
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
                {/* //Recommend this syntax */}
                <button onClick={(event) => { this.handleClick(event) }}
                >{this.state.content}</button>
            </>
        )
    }
}

export default Buttonclick;