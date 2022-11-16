// import
import styles from "./ErrorPage.module.scss"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { NavLink } from "react-router-dom"

// composant "page erreur"
function ErrorPage() {
	return (
		<div className={`${styles.errorPage}`}>
			<Header />
			<div className={`${styles.errorContent}`}>
				<h1>404</h1>
				<p>Oups! La page que vous demandez n'existe pas.</p>
				<NavLink to="/">Retourner sur la page d'accueil.</NavLink>
			</div>
			<Footer />
		</div>
	)
}

export default ErrorPage
