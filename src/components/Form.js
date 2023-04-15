import React from 'react';
import User from './User';
import DisplayInfo from './DisplayInfo';



class Form extends React.Component {

    render() {
        let demo = {
            name: 'shuu',
            age: 26,
            make: 'coffee',
            colleague: 'Teddy'
        };

        return (
            <>
                <User />
                <DisplayInfo {...demo} />
            </>
        )
    }
}

export default Form;