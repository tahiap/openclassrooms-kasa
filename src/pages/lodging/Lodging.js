// import
import styles from "./Lodging.module.scss"
import Slideshow from "./components/Slideshow"
import Rating from "./components/Rating"
import Tag from "./components/Tag"
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
				<Slideshow slides={lodging.pictures} />
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
					<Tag key={infos} text={infos} />
				))}
			</div>
			<div className={`${styles.lodgingRate}`}>
				<Rating rating={lodging.rating} />
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
