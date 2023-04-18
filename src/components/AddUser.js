import React from 'react';
class AddUser extends React.Component {
    state = {
        defaultValue: 'John smith',
    }

    handleOnChange(e) {
        this.setState({
            defaultValue: e.target.value,
        })
    }
    handleOnSubmit(e) {
        e.preventDefault()
        this.props.handleNewUser();
    }

    render() {
        return (
            <>
                <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <input type="text" value={this.state.defaultValue} onChange={(e) => { this.handleOnChange(e) }}></input>
                    <button>submit</button>
                </form>
            </>
        )
    }

};
export default AddUser;