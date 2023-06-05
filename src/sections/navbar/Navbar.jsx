import './navbar.css'

function Navbar() {
    return (
        <nav>
            <a href="/" className='logo'>Ryan Vreeke</a>
            <ul>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
