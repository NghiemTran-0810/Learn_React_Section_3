import React from "react";

class User extends React.Component {
    state = {
        name: 'Nghiêm Treng',
        age: 26,
        address: '128 mamay'
    }

    handleOnChange(event) {
        event.preventDefault();
        this.setState({
            name: event.target.value,
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (

            <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                <label>
                    my name is {this.state.name}
                </label>
                <br />
                <input onChange={(event) => { this.handleOnChange(event) }} value={this.state.name}></input>

                <button>submit</button>

            </form>
        )
    }
}


export default User;