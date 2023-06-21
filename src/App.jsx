import { Fragment } from "react";
import Chamada from "./components/main/sections/chamada/Chamada.jsx"
import Conheca from "./components/main/sections/conheca/Conheca.jsx";

export default function App() {
	return (
		
		<Fragment>
			<Chamada />
			<Conheca />
		</Fragment>
		
		/* <Fragment>
			<Header />
			<Main />
			<Footer />
			<Whatsapp />
		</Fragment> */
	);
}
