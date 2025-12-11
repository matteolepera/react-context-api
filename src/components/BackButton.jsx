import { Link, useNavigate } from "react-router-dom";

export default function BackButton({ title }) {
    const navigate = useNavigate();

    function goBack() {
        event.preventDefault();
        navigate(-1);
    }
    return (
        <>
            <a onClick={goBack} className="btn btn-dark me-3" href="">{title}</a>
        </>
    )
}