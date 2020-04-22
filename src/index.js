import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// TODO: pollyfill 추가 - IE11 안전성
ReactDOM.render(<App />, document.getElementById('root'));
