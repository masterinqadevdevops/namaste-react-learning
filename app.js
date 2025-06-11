import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading = React.createElement(
// 	'h1',
// 	{ id: 'heading' },
// 	'I am from React! App.js file'
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child', key: 'div-child' }, [
		React.createElement(
			'h1',
			{ id: 'child1', key: 'child ' },
			'I am a child element! 🚀 Rocket'
		),
		React.createElement(
			'p',
			{ id: 'para', key: 'para' },
			'This is a paragraph.'
		),
	]),
	React.createElement('div', { id: 'child2', key: 'div-child-2' }, [
		React.createElement(
			'h2',
			{ id: 'child3', key: 'child3' },
			'I am a child element'
		),
		React.createElement(
			'h3',
			{ id: 'paras', key: 'paras' },
			'This is a paragraph'
		),
	]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);
