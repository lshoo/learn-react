import React from 'react';

const list = [
    { 
        title: 'React',
        url: 'https://facebook.github.io/react',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 8,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
    {
        title: 'Webpack',
        url: 'https://github.com/reactjs/webpack',
        author: 'LeBron James',
        num_comments: 7,
        points: 2,
        objectID: 9,
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

// function isSearched(searchTerm) {
//     return function(item) {
//         return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     }
// }

const largeColumn = {
    width: '40%'  
};

const midColumn = {
    width: '30%'
};

const smallColumn = {
    width: '10%'
}
const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());
class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: list,
            searchTerm: '',
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onDismiss(id) {
        const updatedList = this.state.list.filter(item =>
            item.objectID !== id
        );
        
        console.log(this);

        this.setState({list: updatedList});
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }
    render() {

        var msg = "Welcome React World!!!";
        msg = "Hello, " + msg;

        const {searchTerm, list} = this.state;

        return (
            <div className="page"> 
                <div className="interactions">
                    <h2>{msg}</h2>
                    Hello {this.props.name}
                    <Search 
                        value={searchTerm}
                        onChange={this.onSearchChange} 
                    >
                        Search
                    </Search>
                    
                </div>
                <Table 
                        list={list}
                        pattern={searchTerm}
                        onDismiss={this.onDismiss}
                    />
                
            </div>
        );
    }
}

// class Search extends React.Component {
    
//     render() {
//         const { value, onChange, children } = this.props;

//         return (
//             <form>
//                 {children + value}
//                 <input type="text" 
//                 value={value}
//                 onChange={onChange}
                
//                 />
//             </form>
//         );

//     }
// }

function Search(props) {
    const { value, onChange, children } = props;

    return (
        <form>
            {children + value}
            <input type="text" 
            value={value}
            onChange={onChange}
            
            />
        </form>
    );
}
// class Table extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const { list, pattern, onDismiss } = this.props;

//         return (
//             <div>
//                 { list.filter(isSearched(pattern)).map(item =>
                        
//                     <div key={item.objectID}>
//                         <span>
//                             <a href={item.url}>{item.title}</a>
//                         </span>
//                         <span>{item.num_comments}</span>
//                         <span>{item.points}</span>
//                         <span>
//                             <Button onClick={() => onDismiss(item.objectID)}>
//                                 Dismisss
//                             </Button>
//                         </span>
//                     </div>
            
//                 )}
//             </div>
//         )
//     }
// }

function Table(props) {
    const { list, pattern, onDismiss } = props;

    return (
        <div className="table">
            
            { list.filter(isSearched(pattern)).map(item =>
                    
                <div key={item.objectID} className="table-row">
                    <span style={largeColumn}>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    <span style={midColumn}>{item.author}</span>
                    <span style={smallColumn}>{item.num_comments}</span>
                    <span style={smallColumn}>{item.points}</span>
                    <span style={smallColumn}>
                        <Button onClick={() => onDismiss(item.objectID)} className="button-inline">
                            Dismisss
                        </Button>
                    </span>
                </div>
        
            )}
            
        </div>
    )
}

// class Button extends React.Component {
//     render() {
//         const {
//             onClick, className='', children,
//         } = this.props;

//         return (
//             <button 
//                 onClick={onClick}
//                 className={className}
//                 type="button"
//             >
//                 {children}
//             </button>
//         );
//     }
// }

function Button(props) {
    const {
        onClick, className='', children,
    } = props;

    return (
        <button 
            onClick={onClick}
            className={className}
            type="button"
        >
            {children}
        </button>
    );  
}
export default HelloMessage;
