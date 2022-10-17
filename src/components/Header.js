// import
import styles from "./Header.module.scss"
import logo from "../assets/images/logo-color.png"
import { NavLink } from "react-router-dom"

// composant header
function Header() {
	return (
		<header>
			<div className={`${styles.imgContainer}`}>
				<img src={logo} alt="logo kasa" />
			</div>
			<nav>
				<NavLink end to="/">
					Accueil
				</NavLink>
				<NavLink to="/a-propos">À propos</NavLink>
			</nav>
		</header>
	)
}

export default Header
