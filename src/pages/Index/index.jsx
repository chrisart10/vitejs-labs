import { Link } from "react-router-dom";
import router from "../../Routes";
import { v4 as uuidv4 } from "uuid";

function Index() {
	console.log("-----------------------Index-----------------------");
	console.log(router.routes);
	return (
		<div>
			<h1>Index</h1>
			{router.routes.map((route) => {
				return (
					<>
						{route.path !== "/" ? (
							<li key={uuidv4()}>
								<Link to={route.path}>
									{route.path.replace("/", "")}
								</Link>
							</li>
						) : null}
					</>
				);
			})}
		</div>
	);
}

export default Index;
