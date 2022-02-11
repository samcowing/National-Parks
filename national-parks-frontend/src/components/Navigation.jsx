import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="navigation">
            <Link to={`/`}>
                <h1>Home</h1>
            </Link>
        </nav>
    )
}

export default Navigation