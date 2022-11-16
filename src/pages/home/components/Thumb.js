// import
import styles from "./Thumb.module.scss"
import { NavLink } from "react-router-dom"

// composant thumb
function Thumb({ lodging }) {
	return (
		<NavLink to={`/logement/${lodging.id}`}>
			<div className={`${styles.thumb}`}>
				<img src={lodging.cover} alt={lodging.title} />
				<h2>{lodging.title}</h2>
				<div className={`${styles.shadow}`}></div>
			</div>
		</NavLink>
	)
}

export default Thumb
