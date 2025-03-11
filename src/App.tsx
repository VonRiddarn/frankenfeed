import "./App.scss";
import ContentForm from "./widgets/ContentForm/ContentForm";

function App() {
	return (
		<>
			<main>
				<section>
					CREATE POST
					<ContentForm placeholder="Write a post..." />
					<ContentForm placeholder="Make a comment..." />
				</section>
				<section>OLD POSTS</section>
			</main>
			<aside>CHANGE ACCOUNT</aside>
		</>
	);
}

export default App;
