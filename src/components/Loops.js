import React from "react";
import User from "./UserForLoops";

class ListUser extends React.Component {
    state = {
        listUser: [
            {
                id: 1,
                name: 'John',
                age: '36',
            },
            {
                id: 1,
                name: 'tom',
                age: '24',
            },
            {
                id: 1,
                name: 'tobey',
                age: '46',
            },
            {
                id: 1,
                name: 'danniel',
                age: '34',
            },
            {
                id: 1,
                name: 'logan',
                age: '19',
            },
        ]
    }


    render() {
        return (
            <>
                <User listUser={this.state.listUser} />
            </>
        )
    }
}
export default ListUser;