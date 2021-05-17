import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			{/* nest root component with layout component to display in every page  */}
			<Component {...pageProps} />
			{/* this is where all the components and pages are renderd */}
		</Layout>
	);
}

export default MyApp;
