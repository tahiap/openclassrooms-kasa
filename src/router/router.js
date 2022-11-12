// import
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/errorPage/ErrorPage"
import Home from "../pages/home/Home"
import Lodging from "../pages/lodging/Lodging"
import AboutUs from "../pages/aboutUs/AboutUs"

export const router = createBrowserRouter([
	{
		path: "openclassrooms-kasa/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "openclassrooms-kasa/",
				element: <Home />,
			},
			{
				path: "openclassrooms-kasa/logement/:id",
				element: <Lodging />,
			},
			{
				path: "openclassrooms-kasa/a-propos",
				element: <AboutUs />,
			},
		],
	},
])
