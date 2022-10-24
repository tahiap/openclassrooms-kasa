// import
import styles from "./Collapse.module.scss"
import { useState } from "react"

// composant dropdown

function Collapse({ title, text, size }) {
	const [showText, setShowText] = useState(false)

	return (
		<div
			className={` ${styles.collapseGeneral} ${
				size === "medium" ? styles.collapseMedium : styles.collapseLarge
			}`}
		>
			<div className={`${styles.title}`}>
				<h2>{title}</h2>
				{showText ? (
					<i
						className="fa-solid fa-chevron-up"
						onClick={() => setShowText(false)}
					></i>
				) : (
					<i
						className="fa-solid fa-chevron-down"
						onClick={() => setShowText(true)}
					></i>
				)}
			</div>
			{showText && (
				<div className={`${styles.text}`}>
					{title === "Équipements" ? (
						text.map((t) => <li key={t}>{t}</li>)
					) : (
						<p>{text}</p>
					)}
				</div>
			)}
		</div>
	)
}

export default Collapse
