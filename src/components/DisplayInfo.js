import React from "react";

class DisplayInfo extends React.Component {

    render() {

        const { name, make, colleague } = this.props;

        return (
            <>
                <hr />
                <div> {name} make {make} for {colleague} </div>
            </>
        );
    }
}
export default DisplayInfo;