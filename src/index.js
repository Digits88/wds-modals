const React = require('react');
const ReactDOM = require('react-dom');

const TestContainer = require('./components/TestComponent');

ReactDOM.render(
	<TestContainer/>,
	document.getElementById('app')
);