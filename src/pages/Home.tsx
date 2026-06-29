import { Link } from "react-router-dom";

function Home(){

    return(

        <>

        <section className="hero text-center">

            <h1 className="display-4">

                Bem-vindo ao Aroma Café ☕

            </h1>

            <p className="lead">

                Cafés especiais preparados com muito carinho.

            </p>

            <Link
                className="btn btn-warning btn-lg"
                to="/catalogo"
            >
                Ver Cardápio
            </Link>

        </section>
        <section className="my-5">

<h2 className="text-center mb-5">

🔥 Mais Vendidos

</h2>

<div className="row">

<div className="col-md-4">

<div className="card shadow">

<img
src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"
className="card-img-top"
/>

<div className="card-body text-center">

<h4>

Espresso Premium

</h4>

<p>

O favorito dos clientes.

</p>

</div>

</div>

</div>

<div className="col-md-4">

<div className="card shadow">

<img
src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500"
className="card-img-top"
/>

<div className="card-body text-center">

<h4>

Cappuccino

</h4>

<p>

Espuma cremosa.

</p>

</div>

</div>

</div>

<div className="col-md-4">

<div className="card shadow">

<img
src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500"
className="card-img-top"
/>

<div className="card-body text-center">

<h4>

Brownie

</h4>

<p>

Combina perfeitamente com café.

</p>

</div>

</div>

</div>

</div>

</section>
        <div className="row mt-5">

            <div className="col-md-4">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h1>☕</h1>

                        <h4>Cafés</h4>

                        <p>

                            Cafés especiais feitos na hora.

                        </p>

                    </div>

                </div>

            </div>

            <div className="col-md-4">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h1>🍰</h1>

                        <h4>Doces</h4>

                        <p>

                            Brownies, cheesecakes e muito mais.

                        </p>

                    </div>

                </div>

            </div>

            <div className="col-md-4">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h1>🥐</h1>

                        <h4>Salgados</h4>

                        <p>

                            Croissants e lanches fresquinhos.

                        </p>

                    </div>

                </div>

            </div>

        </div>

        </>

    )

}

export default Home;
