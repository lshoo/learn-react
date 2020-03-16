import React from 'react';

const list = [
    { 
        title: 'React',
        url: 'https://facebook.github.io/react',
        author: 'Jordan Walke',
        num_comments: 3,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    }
]

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        <li>{number}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

class HelloMessage extends React.Component {
    
    render() {
<<<<<<< HEAD
        var msg = "Welcome React World!!!";

=======
        let msg = "Welcome React World!";
        msg = "Hello, " + msg;
>>>>>>> 8fc2dfb76e103d9d7d1d4880c111b0706463578a
        return (
            <div> 
                <h2>{msg}</h2>
                Hello {this.props.name}
                { list.map(function(item) {
                    return (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span>{item.points}</span>
                        </div>
                    );
                })}
                
            </div>
        );
    }
}

export default HelloMessage;
