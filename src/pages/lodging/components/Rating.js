// composant note
function Rating({ rating }) {
	const activeStars = rating
	const totalStars = 5

	return (
		<>
			{[...new Array(totalStars)].map((star, index) => {
				return index < activeStars ? (
					<i key={index} className="fa-solid fa-star"></i>
				) : (
					<i key={index} className="fa-regular fa-star"></i>
				)
			})}
		</>
	)
}

export default Rating
