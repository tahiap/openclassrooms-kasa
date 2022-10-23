// import
import styles from "./Slideshow.module.scss"
import { useState } from "react"

// composant slideshow
function Slideshow({ slides }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	function previousSlide() {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	function nextSlide() {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	return (
		<div className={`${styles.slideshow}`}>
			{slides.length === 1 ? (
				<img src={slides} alt="logement" />
			) : (
				slides.map((slide, slideIndex) => {
					return (
						slideIndex === currentIndex && (
							<>
								<img src={slide} alt="logement" />
								<div className={`${styles.calc}`}>
									<i
										className={`fa-solid fa-chevron-left ${styles.leftIcon}`}
										onClick={previousSlide}
									></i>
									<i
										className={`fa-solid fa-chevron-right ${styles.rightIcon}`}
										onClick={nextSlide}
									></i>
									<p>
										{currentIndex + 1}/{slides.length}
									</p>
								</div>
							</>
						)
					)
				})
			)}
		</div>
	)
}

export default Slideshow
