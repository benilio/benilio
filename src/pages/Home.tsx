import Hero from '../components/Hero'
import Projects from '../components/Project/ProjectSection'
import AboutMe from '../components/AboutMe'
import ContactForm from '../components/ContactForm'

function Home() {
	return (
		<main>
			<Hero />
			<Projects />
			<AboutMe />
			<ContactForm />
		</main>
	)
}

export default Home
