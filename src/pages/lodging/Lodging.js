// import
import styles from "./Lodging.module.scss"
import Slideshow from "./components/Slideshow"
import Tag from "../../components/tag/Tag"
import Collapse from "../../components/collapse/Collapse"
import { useParams, useOutletContext } from "react-router-dom"

// composant "logement"
function Lodging() {
	const lodgingList = useOutletContext()
	const { id } = useParams()

	const lodging = lodgingList.find((l) => l.id === id)

	return (
		<div className={`${styles.lodging}`}>
			<div className={`${styles.lodgingSlideshow}`}>
				<Slideshow />
			</div>
			<div className={`${styles.lodgingTitle}`}>
				<h1>{lodging.title}</h1>
				<address>{lodging.location}</address>
			</div>
			<div className={`${styles.lodgingHost}`}>
				<p>{lodging.host.name}</p>
				<div>
					<img src={lodging.host.picture} alt="" />
				</div>
			</div>
			<div className={`${styles.lodgingTags}`}>
				{lodging.tags.map((infos) => (
					<Tag key={lodging.tags.infos} text={infos} />
				))}
			</div>
			<div className={`${styles.lodgingRate}`}>
				<i className="fa-regular fa-star"></i>
				<i className="fa-regular fa-star"></i>
				<i className="fa-regular fa-star"></i>
				<i className="fa-regular fa-star"></i>
				<i className="fa-regular fa-star"></i>
			</div>
			<div className={`${styles.lodgingCollapses}`}>
				<Collapse
					title="Description"
					text={lodging.description}
					size="medium"
				/>
				<Collapse title="Équipements" text={lodging.equipments} size="medium" />
			</div>
		</div>
	)
}

export default Lodging
