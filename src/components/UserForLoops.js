import React from "react";

class User extends React.Component {
    render() {
        const { listUser } = this.props;
        return (
            <>
                {listUser.map((user, index) => {
                    return (
                        <div key={index}>
                            {user.name}  {user.age}
                        </div>
                    )
                })}

            </>
        )
    }
}

export default User; 