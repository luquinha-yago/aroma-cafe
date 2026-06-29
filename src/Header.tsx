import { Link } from "react-router-dom";

interface Props{
    quantidade:number;
}

function Header({quantidade}:Props){

    return(

<nav className="navbar navbar-expand-lg navbar-dark shadow">

<div className="container">

<Link className="navbar-brand" to="/">
☕ Aroma Café
</Link>

<button
className="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#menu"
>
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="menu">

<ul className="navbar-nav ms-auto align-items-center">

<li className="nav-item">
<Link className="nav-link" to="/">Home</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/catalogo">Cardápio</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/sobre">Sobre</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/contato">Contato</Link>
</li>

<li className="nav-item ms-3">

<Link className="btn btn-warning position-relative" to="/carrinho">

<i className="bi bi-cart-fill"></i>

<span
className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
>

{quantidade}

</span>

</Link>

</li>

</ul>

</div>

</div>

</nav>

    )

}

export default Header;