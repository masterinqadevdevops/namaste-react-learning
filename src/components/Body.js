import RestroCards from './RestroCards';
import restList from '../../utils/mockData';
import { useState } from 'react';

const Body = () => {
	const [listOfRestaurants, setlistOfRestaurants] = useState(restList);
	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listOfRestaurants.filter(
							(res) => res.info.avgRating == 4.2
						);
						setlistOfRestaurants(filteredList);
						console.log(filteredList);
					}}
				>
					Filter
				</button>
			</div>
			<div className="restro-cards-container">
				{listOfRestaurants.map((restaurant) => (
					<RestroCards key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
