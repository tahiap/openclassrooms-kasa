// import
import styles from "./Thumb.module.scss"
import { Link } from "react-router-dom"

// composant thumb
function Thumb({ lodging }) {
	return (
		<Link to={`/logement/${lodging.id}`}>
			<div className={`${styles.thumb}`}>
				<img src={lodging.cover} alt={lodging.title} />
				<h2>{lodging.title}</h2>
			</div>
		</Link>
	)
}

export default Thumb
