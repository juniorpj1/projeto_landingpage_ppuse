import { Fragment } from "react";
import Main from "./components/main/Main.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Whatsapp from "./components/tools/Whatsapp.jsx";
import Chamada from "./components/main/sections/chamada/Chamada.jsx"

export default function App() {
	return (
		
		<Fragment>
			<Chamada />
		</Fragment>
		
		/* <Fragment>
			<Header />
			<Main />
			<Footer />
			<Whatsapp />
		</Fragment> */
	);
}
