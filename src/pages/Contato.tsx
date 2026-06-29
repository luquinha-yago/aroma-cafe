function Contato() {

    return (

        <div className="container">

            <h1 className="mb-4">
                Contato
            </h1>

            <div className="row">

                <div className="col-md-6">

                    <div className="mb-3">

                        <label className="form-label">
                            Nome
                        </label>

                        <input
                            className="form-control"
                            type="text"
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            className="form-control"
                            type="email"
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Mensagem
                        </label>

                        <textarea
                            className="form-control"
                            rows={5}
                        ></textarea>

                    </div>

                    <button className="btn btn-success">
                        Enviar
                    </button>

                </div>

                <div className="col-md-6">

                    <h4>Informações</h4>

                    <p>
                        📍 Rua das Flores, 100 - Centro
                    </p>

                    <p>
                        📞 (34) 99999-9999
                    </p>

                    <p>
                        ✉ contato@aromacafe.com
                    </p>

                    <iframe
                        title="Mapa"
                        src="https://www.google.com/maps?q=Uberaba&output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                    ></iframe>

                </div>

            </div>

        </div>

    );

}

export default Contato;