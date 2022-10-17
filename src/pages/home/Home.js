// import
import styles from "./Home.module.scss"
import ThumbList from "./components/ThumbList"
import Banner from "../../components/banner/Banner"
import bannerHome from "../../assets/images/banner-home.png"
import { useOutletContext } from "react-router-dom"

// composant "home"
function Home() {
	const bannerImage = bannerHome
	const lodgingList = useOutletContext()

	return (
		<div className={`${styles.home}`}>
			<Banner
				bannerImage={bannerImage}
				bannerText="Chez vous, partout et ailleurs"
			/>
			<ThumbList lodgingList={lodgingList} />
		</div>
	)
}

export default Home
