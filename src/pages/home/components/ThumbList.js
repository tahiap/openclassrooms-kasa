// import
import styles from "./ThumbList.module.scss"
import Thumb from "./Thumb"

// composant liste de thumb
function ThumbList({ lodgingList }) {
	return lodgingList.length ? (
		<ul className={`${styles.thumbList}`}>
			{lodgingList.map((lodging) => (
				<Thumb key={lodging.id} lodging={lodging} />
			))}
		</ul>
	) : (
		<div className={`${styles.emptyFeed}`}>
			<p>Aucune publication pour le moment.</p>
		</div>
	)
}

export default ThumbList
