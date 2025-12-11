import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/logo.png"

export default function Header() {
    const navBarLinks = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Prodotti",
            path: "/prodotti"
        },
        {
            id: 3,
            name: "Chi Siamo",
            path: "/chi-siamo"
        },
        {
            id: 4,
            name: "Contatti",
            path: "/contatti"
        }
    ];

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to={"/"}>
                            <img src={logo} alt="logo buy 'n bleed" width="100" height="50" />
                        </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navBarLinks.map((link) =>
                                <li key={link.id} className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to={link.path}>{link.name}</NavLink>
                                </li>
                            )}
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/login"}><i className="bi bi-person-fill"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/cart"}><i className="bi bi-cart-fill"></i></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}