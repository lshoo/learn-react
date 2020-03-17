import React from 'react';

const DEFAULT_QUERY = "redux";
const DEFAULT_PAGE = "0";
const DEAFULT_HPP = "100";

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}${DEFAULT_PAGE}&${PARAM_HPP}${DEAFULT_HPP}`;

console.log(url);

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
// const isSearched = searchTerm => item =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase());
class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //list: list,
            results: null,
            searchKey: "",
            searchTerm: DEFAULT_QUERY,
            error: null,
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);

        // chapter3
        this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
        this.onSearchSumbit = this.onSearchSumbit.bind(this);
    }

    needsToSearchTopStories(searchTerm) {
        return !this.state.results[searchTerm];
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.setState({ searchKey: searchTerm });
        this.fetchSearchTopStories(searchTerm);
    }

    onDismiss(id) {
        const { searchKey, results } = this.state;
        const {hits, page } = results[searchKey];

        const isNotId = item => item.objectID !== id;

        const updatedHits = hits.filter(isNotId);
        
        console.log(this);

        this.setState({
            //result: Object.assign({}, this.state.result, { hits: updatedHits })
            ...results,
            [searchKey]: { hits: updatedHits, page }
        });
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    /** chapter3 start */
    setSearchTopStories(result) {
        const { hits, page} = result;

        const { searchKey, results } = this.state;

        const oldHits = results && results[searchKey]
            ? results[searchKey].hits
            : [];

        const updatedHits = [
            ...oldHits, ...hits
        ];

        this.setState({
            ...results,
            [searchKey]: {hits: updatedHits, page}
        });
    }

    fetchSearchTopStories(searchTerm, page = 0) {
        fetch(`${url}${page}&${PARAM_HPP}${DEAFULT_HPP}`)
            .then(response => response.json())
            .then(results => this.setSearchTopStories(results))
            .catch(e => this.setState({ error: e }));
    }

    onSearchSumbit(event) {
        const {
            searchTerm
        } = this.state;
        
        this.setState({ searchKey: searchTerm });

        if (this.needsToSearchTopStories(searchTerm)) {
            this.fetchSearchTopStories(searchTerm);
        }
        event.preventDefault();
    }
    /** chapter3 end */

    render() {

        var msg = "Welcome React World!!!";
        msg = "Hello, " + msg;

        console.log(this.state);

        const {searchTerm, results, searchKey, error} = this.state;
        
        if (error) {
            return (<p>Something went wrong.</p>);
        }

        const page = (results && results[searchKey] && results[searchKey].page) || 0;

        const list = (
            results &&
            results[searchKey] &&
            results[searchKey].hits
        ) || [];

        return (
            <div className="page"> 
                <div className="interactions">
                    <h2>{msg}</h2>
                    Hello {this.props.name}
                    <Search 
                        value={searchTerm}
                        onChange={this.onSearchChange} 
                        onSumbit={this.onSearchSumbit}
                    >
                        Search
                    </Search>
                    
                </div>
                {
                    error 
                    ? 
                    <div className="interactions">
                        <p>Something went wrong.</p>
                    </div>
                    :
                    <Table 
                        list={list}
                        pattern={searchTerm}
                        onDismiss={this.onDismiss}
                    />
                    
                }
                <div className="interactions">
                    <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
                        More
                    </Button>
                </div>
                
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

// function Search(props) {
//     const { value, onChange, children } = props;

//     return (
//         <form>
//             {children + value}
//             <input type="text" 
//             value={value}
//             onChange={onChange}
            
//             />
//         </form>
//     );
// }

const Search = ({
    value,
    onChange,
    onSumbit,
    children
}) =>
    <form>
        {children + value}
        <input type="text" 
            value={value}
            onChange={onChange}
        />
        <button type="submit">
            {children}
        </button>
    </form>  

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
            
            { list.map(item =>
                    
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
