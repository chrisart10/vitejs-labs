import { createBrowserRouter } from "react-router-dom";
import Lab1 from "./pages/lab1/Lab1";
import Index from "./pages/Index";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},

	{
		path: "/lab1",
		element: <Lab1 />,
	},
]);

export default router;
