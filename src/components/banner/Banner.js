// import
import styles from "./Banner.module.scss"

// composant banner
function Banner({ bannerImage, bannerText }) {
	return (
		<div className={`${styles.banner}`}>
			<img src={bannerImage} alt="bannière paysage" />
			<h1 className={`${styles.bannerText}`}>{bannerText}</h1>
		</div>
	)
}

export default Banner
