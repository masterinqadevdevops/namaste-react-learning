import React from 'react';
import ReactDOM from 'react-dom/client';
import Headers from './components/Headers';
import Body from './components/Body';

const AppLayout = () => {
	return (
		<div className="app">
			<Headers />
			<Body />
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout />);
