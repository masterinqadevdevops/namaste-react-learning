// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // const JsxHeading = () => (
// // 	<h1 id="head" tabIndex="5">
// // 		Namaste React! 🚀
// // 	</h1>
// // );
// // //ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);

import React from 'react';
import ReactDOM from 'react-dom/client';

const HeadingComponent = () => {
	return (
		<div id="root">
			<h1 id="heading">"Hello I am from React heading Compoent 🚀</h1>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
