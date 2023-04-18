import React from "react";

class User extends React.Component {
    state = {
        isShowUers: false

    };

    handleHideShow(event) {
        this.setState({
            isShowUers: !this.state.isShowUers
        })
    };

    render() {
        const { listUser } = this.props;
        return (
            <>
                <button onClick={(event) => { this.handleHideShow(event) }}>{this.state.isShowUers == true ? 'Hide list Users' : 'Show list Users'}
                </button>
                <div>
                    {this.state.isShowUers && listUser.map((user, index) => {
                        return (

                            <div key={index} className={user.age <= 19 ? 'red' : 'green'}>
                                {user.name}  {+user.age}
                            </div>

                        )
                    })}


                </div>


            </>
        )
    }
}

export default User; 