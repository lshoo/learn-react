import React from 'react';

class HelloMessage extends React.Component {
    render() {
        var msg = "Welcome React World!!!";

        return (
            <div> 
                <h2>{msg}</h2>
                Hello {this.props.name}
            </div>
        );
    }
}

export default HelloMessage;