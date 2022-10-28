// import
import styles from "./AboutUs.module.scss"
import Banner from "../../components/banner/Banner"
import Collapse from "../../components/collapse/Collapse"
import infosAboutUs from "../../data/infosAboutUs"
import bannerAboutUs from "../../assets/images/banner-aboutus.png"

// composant "à propros"
function AboutUs() {
	const bannerImage = bannerAboutUs
	const collapseInfos = infosAboutUs

	return (
		<div className={`${styles.aboutUs}`}>
			<Banner bannerImage={bannerImage} />
			<ul className={`${styles.collapseList}`}>
				{collapseInfos.map((infos) => (
					<Collapse key={infos.title} title={infos.title} text={infos.text} />
				))}
			</ul>
		</div>
	)
}

export default AboutUs
