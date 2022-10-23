// composant note
function Rating({ rating }) {
	const activeStars = rating
	const totalStars = 5

	return (
		<>
			{[...new Array(totalStars)].map((star, index) => {
				return index < activeStars ? (
					<i className="fa-solid fa-star"></i>
				) : (
					<i className="fa-regular fa-star"></i>
				)
			})}
		</>
	)
}

export default Rating
