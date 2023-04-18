import React from 'react';
class User extends React.Component {
    render() {
        const { listUser } = this.props;
        return (
            <>
                <ul>
                    {
                        listUser.map((user, index) => {
                            return (
                                <li key={index} className={user.age >= 18 ? 'green' : 'red'}>{user.name} {user.age}</li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }

};
export default User; 