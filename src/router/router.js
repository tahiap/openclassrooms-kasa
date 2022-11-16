// import
import { createHashRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/errorPage/ErrorPage"
import Home from "../pages/home/Home"
import Lodging from "../pages/lodging/Lodging"
import AboutUs from "../pages/aboutUs/AboutUs"

export const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/logement/:id",
				element: <Lodging />,
			},
			{
				path: "/a-propos",
				element: <AboutUs />,
			},
		],
	},
])
