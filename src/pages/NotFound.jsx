import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function NotFound() {
    return (
        <div className="container p-5 text-white">
            <h1>404 - Pagina non trovata</h1>
            <p>Complimenti, anche la tua voglia di vivere non è stata trovata.</p>
            <BackButton title={"Torna indietro"} />
            <Link className="btn btn-dark" to='/'>Torna alla home</Link>
        </div>
    )
}