import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link  href="/">
                    <a className="navbar-brand">Carlos Espinosa</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link  href="/work">
                                <a className="nav-link" >Works</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  href="/post">
                                <a className="nav-link" >Post</a>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link  href="https://github.com/carlos7891/Portfolio-">
                                <div className="d-flex align-items-center" >
                                <FontAwesomeIcon className="text-white" icon={faGithub} />
                                <a className="nav-link mx-1" >
                                Source</a>

                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Navbar
