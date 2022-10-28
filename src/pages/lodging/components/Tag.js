// import
import styles from "./Tag.module.scss"

// composant tag
function Tag({ text }) {
	return (
		<div className={`${styles.tag}`}>
			<p>{text}</p>
		</div>
	)
}

export default Tag
