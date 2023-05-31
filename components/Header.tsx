// Components
import Container from "./Container"

const Header = () => {
    return (
        <header className="bg-zinc-800 py-3 sticky top-0 z-10">
            <Container classes='flex justify-between items-center'>
                <h1 className="text-3xl text-white">Better <span className="text-teal-300">Idaho</span> Yards</h1>

                <nav className="flex text-white">
                    <p className="text-lg ml-5 cursor-pointer">Blog</p>
                    <p className="text-lg ml-5 cursor-pointer">About</p>
                    <p className="text-lg ml-5 pr-5 cursor-pointer border-r">Contact</p>
                    <p className="text-lg ml-5 cursor-pointer">Login</p>
                </nav>
            </Container>
        </header>
    )
}

export default Header