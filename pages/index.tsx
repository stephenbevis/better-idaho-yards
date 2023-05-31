// Layout
import GlobalLayout from '../layouts/GlobalLayout'

// Components
import Hero from '../components/Hero'
import Container from '../components/Container'
import Services from '../components/Services'
import TeamMembers from '../components/TeamMembers'

const Home = () => {
    return (
        <GlobalLayout>
            <Hero />

            <Container classes='mb-20'>
                <Services />
            </Container>

            <TeamMembers />
        </GlobalLayout>
    )
}

export default Home