import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchProduct();
    }, [id])

    function fetchProduct() {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            const data = resp.data;
            const isEmpity = Object.keys(data).length === 0;
            if (isEmpity) {
                navigate("/prodotti");
            }
            setProduct(resp.data);
        }).finally(() => {
            setLoading(false);
        })
    }

    function nextProduct() {
        navigate(`/prodotti/${parseInt(id) + 1}`)
    }
    function prevProduct() {
        const currentId = parseInt(id);
        if (currentId > 1) {
            navigate(`/prodotti/${parseInt(id) - 1}`)
        }
    }

    if (loading) {
        return (
            <div className="container p-3">
                <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-danger">Il tuo prodotto sta caricando...</div>
                </div>
            </div>
        )
    }
    return (

        <div className="container p-3">
            {product && (
                <>
                    <Link className="btn btn-dark me-3" to={"/prodotti"}> Torna ai prodotti </Link>
                    <div className="product-banner">
                        <div className="product-top">
                            <h2 className="text-white mt-5">{product.title}</h2>
                            <div className="product-body d-flex text-white">
                                <img src={product.image} alt={product.title} />
                                <div className="product-info p-3">
                                    <h4>Descrizione:</h4>
                                    <p>{product.description}</p>
                                    <h4>A soli {product.price}&euro;</h4>
                                    <a className='btn btn-dark' href="">Aggiungi al carrello</a>
                                </div>
                            </div>
                        </div>
                        <a onClick={prevProduct} className='btn btn-dark mx-3' href="">Prodotto precedente</a>
                        <a onClick={nextProduct} className='btn btn-dark mx-3' href="">Prodotto successivo</a>
                    </div>
                </>
            )}
        </div>
    )
}