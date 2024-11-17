import { Hero } from "./hero";
import { Quotes } from "./quotes";
import { TechStack } from "./tech-stack";
export default function Content() {
	return (
		<section>
			<Hero />
			<TechStack />
			<Quotes />
		</section>
	);
}
