import { createBrowserRouter } from "react-router-dom";
import Lab1 from "./pages/lab1/Lab1";

const router = createBrowserRouter([
	{
		path: "/lab1",
		element: <Lab1 />,
	},
]);

export default router;
