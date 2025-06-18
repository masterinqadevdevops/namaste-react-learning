import { LOGO_URL } from '../../utils/constants';
import { useState } from 'react';
const Headers = () => {
	//let btnName = 'Login';
	const [btnName, setBtnName] = useState('Login');
	return (
		<div className="headers">
			<div className="logo-container">
				<img className="brand-logo" src={LOGO_URL} alt="Logo" />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Menu</li>
					<li>Cart</li>
					<button
						className="login-btn"
						onClick={() => {
							if (btnName === 'Login') {
								setBtnName('Logout');
							} else {
								setBtnName('Login');
							}
						}}
					>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};
export default Headers;
