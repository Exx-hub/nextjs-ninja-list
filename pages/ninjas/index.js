import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");

	const data = await res.json();

	return {
		props: {
			ninjas: data,
		},
	};
};

const Ninjas = ({ ninjas }) => {
	console.log(ninjas);
	return (
		<>
			<Head>
				<title>NINJA LIST | ALL NINJAS</title>
				<meta name="keywords" content="ninja" />
			</Head>
			<h1>All Ninjas</h1>
			{ninjas.map((item) => (
				<Link href={`/ninjas/${item.id}`} key={item.id}>
					<a className={styles.single}>
						<h3>{item.name}</h3>
					</a>
				</Link>
			))}
		</>
	);
};

export default Ninjas;
