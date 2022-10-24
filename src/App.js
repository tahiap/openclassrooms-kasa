import styles from "./App.module.scss"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import infosLodging from "./data/infosLodging"

function App() {
	return (
		<div className={`${styles.appContainer}`}>
			<Header />
			<Outlet context={infosLodging} />
			<Footer />
		</div>
	)
}

export default App
