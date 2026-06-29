interface ProdutoCarrinho{

    id:number;
    nome:string;
    preco:number;
    quantidade:number;

}

interface Props{

    carrinho:ProdutoCarrinho[];
    removerCarrinho:(id:number)=>void;
    aumentarQuantidade:(id:number)=>void;
    diminuirQuantidade:(id:number)=>void;

}

function Carrinho({

    carrinho,
    removerCarrinho,
    aumentarQuantidade,
    diminuirQuantidade

}:Props){

    const subtotal=carrinho.reduce(

        (s,p)=>s+p.preco*p.quantidade,

        0

    );

    const entrega=subtotal>0?5:0;

    const total=subtotal+entrega;

    return(

<div className="container">

<h2 className="mb-4">

🛒 Meu Carrinho

</h2>

{

carrinho.length===0&&

<div className="alert alert-warning">

Seu carrinho está vazio.

</div>

}

<div className="row">

<div className="col-lg-8">

{

carrinho.map(produto=>(

<div
className="card mb-3 p-3"
key={produto.id}
>

<div className="row align-items-center">

<div className="col-md-5">

<h4>

{produto.nome}

</h4>

<p>

R$ {produto.preco.toFixed(2)}

</p>

</div>

<div className="col-md-3 text-center">

<div className="btn-group">

<button
className="btn btn-outline-secondary"
onClick={()=>diminuirQuantidade(produto.id)}
>

-

</button>

<button
className="btn btn-light"
>

{produto.quantidade}

</button>

<button
className="btn btn-outline-secondary"
onClick={()=>aumentarQuantidade(produto.id)}
>

+

</button>

</div>

</div>

<div className="col-md-2">

<strong>

R$

{(produto.preco*produto.quantidade).toFixed(2)}

</strong>

</div>

<div className="col-md-2">

<button
className="btn btn-danger"
onClick={()=>removerCarrinho(produto.id)}
>

<i className="bi bi-trash"></i>

</button>

</div>

</div>

</div>

))

}

</div>

<div className="col-lg-4">

<div className="card shadow p-4 sticky-top">

<h3>

Resumo do Pedido

</h3>

<hr/>

<p>

Produtos

<span className="float-end">

{carrinho.length}

</span>

</p>

<p>

Subtotal

<span className="float-end">

R$ {subtotal.toFixed(2)}

</span>

</p>

<p>

Entrega

<span className="float-end">

R$ {entrega.toFixed(2)}

</span>

</p>

<hr/>

<h4>

Total

<span className="float-end">

R$ {total.toFixed(2)}

</span>

</h4>

<button className="btn btn-success w-100 mt-4">

Finalizar Compra

</button>

</div>

</div>

</div>

</div>

    )

}

export default Carrinho;