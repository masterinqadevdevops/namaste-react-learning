// const heading = React.createElement(
// 	'h1',
// 	{ id: 'heading' },
// 	'I am from React! App.js file'
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', {}, 'I am a child element!'),
		React.createElement('p', { id: 'para' }, 'This is a paragraph.'),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h2', {}, 'I am a child element'),
		React.createElement('h3', { id: 'paras' }, 'This is a paragraph'),
	]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);
