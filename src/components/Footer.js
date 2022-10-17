// import
import styles from "./Footer.module.scss"
import logo from "../assets/images/logo-white.png"

// composant footer
function Footer() {
	return (
		<footer>
			<div className={`${styles.imgContainer}`}>
				<img src={logo} alt="logo kasa" />
			</div>
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer
