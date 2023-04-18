import React from 'react';
import AddUser from './AddUser';
import User from './User';
class List extends React.Component {
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
                age: '12',
            },
            {
                id: 1,
                name: 'tobey',
                age: '46',
            },
            {
                id: 1,
                name: 'danniel',
                age: '8',
            },
            {
                id: 1,
                name: 'logan',
                age: '19',
            },
        ]
    }
    handleNewUser = () => {
        return alert(this)
    }


    render() {
        return (
            <>
                <AddUser handleNewUser={this.handleNewUser} />
                <User listUser={this.state.listUser} />
            </>
        )
    }

};
export default List; 