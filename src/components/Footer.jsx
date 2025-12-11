export default function Footer() {
    return (
        <footer className="bg-dark">
            <div className="container">
                <div className="row p-3 text-danger d-flex">
                    <div className="col-2">
                        <h3>Col1</h3>
                        <ul>
                            <li>
                                <a href="">Ciao</a>
                            </li>
                            <li>
                                <a href="">Ciao</a>
                            </li>
                            <li>
                                <a href="">Ciao</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3>Col2</h3>
                        <ul>
                            <li>
                                <a href="">Ciao</a>
                            </li>
                            <li>
                                <a href="">Ciao</a>
                            </li>
                            <li>
                                <a href="">Ciao</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3>Col3</h3>
                        <ul>
                            <li>
                                <a href="">Ciao</a>
                            </li>
                            <li>
                                <a href="">Ciao</a>
                            </li>
                            <li>
                                <a href="">Ciao</a>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
            <div className="bg-danger px-3 d-flex justify-content-between">
                <p>P.IVA 66666666</p>
                <ul className="d-flex gap-4">
                    <li>
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="">X</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}