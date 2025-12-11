import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";


export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((resp) => {
                setProducts(resp.data);
            })
    }
    return (
        <div className="container p-3">
            <h2 className="text-white">Prodotti</h2>
            <div className="row p-3 g-4">

                {products.map((product) =>
                    <div key={product.id} className="col-12 col-sm-6 col-lg-3 text-center">
                        <Card
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            id={product.id} />
                    </div>
                )}

            </div>
        </div>
    )
}