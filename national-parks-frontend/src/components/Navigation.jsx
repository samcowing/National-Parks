import { Link } from 'react-router-dom'
import logo from '../logo/S.mp4'
import ReactPlayer from 'react-player'

function Navigation() {
    return (
        <nav className="nav">
            <Link to={`/`}>
                <ReactPlayer
                    url = {logo} 
                    playing = {true}
                    muted = {true}
                    width = { "200px" }
                    height = { "200px" }
                />
            </Link>
        </nav>
    )
}

export default Navigation