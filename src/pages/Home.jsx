import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Regala Dolore… Risparmia Sangue!</h1>
                <p>Sconti natalizi così forti che faranno piangere il tuo portafoglio. Shoppa prima che sia troppo tardi!</p>
                <Link className="btn btn-danger" to={"/prodotti"}>Dolore in Offerta</Link>
            </div>
        </div>
    )
}