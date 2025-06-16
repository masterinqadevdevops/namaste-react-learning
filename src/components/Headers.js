import { LOGO_URL } from '../../utils/constants';
const Headers = () => {
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
				</ul>
			</div>
		</div>
	);
};
export default Headers;
