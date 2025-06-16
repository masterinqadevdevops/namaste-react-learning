import { CDN_URL } from '../../utils/constants';
const RestroCards = (prop) => {
	const { resData } = prop;
	const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
		resData?.info;
	return (
		<div className="restro-cards" style={{ backgroundColor: '#f0f0f0' }}>
			<img className="rest-img" src={CDN_URL + cloudinaryImageId} alt="KFC" />
			<h3>{name}</h3>
			<h3>{cuisines.join(',')}</h3>
			<h3>{avgRating} Stars</h3>
			<h3>{resData.info.sla.deliveryTime} Minutes</h3>
		</div>
	);
};

export default RestroCards;
