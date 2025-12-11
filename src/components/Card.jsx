import { Link } from "react-router-dom";
export default function Card({ title, image, price, id }) {
    return (
        <div className="card text-bg-dark h-100">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{price}&euro;</p>
                <Link className="btn btn-danger" to={`/prodotti/${id}`}>Vedi dettagli</Link>
            </div>
        </div>
    )
}