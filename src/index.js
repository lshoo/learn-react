import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloMessage from './HelloMessage';
import NumberList from './NumberList';
import Timer from './Timer';
import TodoApp from './TodoApp';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<HelloMessage name="English"/>, document.getElementById('app'));

const numbers = [1, 2, 3, 4, 5, 100];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('nl')
);

ReactDOM.render(<Timer />, document.getElementById('timer'));

ReactDOM.render(<TodoApp />, document.getElementById('todo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept();
}