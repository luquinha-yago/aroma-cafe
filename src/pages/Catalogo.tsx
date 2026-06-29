import { useState } from "react";
import { Link } from "react-router-dom";
import produtos from "../data/produtos.json";

interface Props {
  adicionarCarrinho: (produto: any) => void;
}

function Catalogo({ adicionarCarrinho }: Props) {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const categorias = [
    "Todos",
    "Café",
    "Doce",
    "Salgado"
  ];

  const lista = produtos.filter((produto) => {

    const nome = produto.nome.toLowerCase().includes(busca.toLowerCase());

    const cat =
      categoria === "Todos" ||
      produto.categoria === categoria;

    return nome && cat;

  });

  return (
    <div>

      <h1 className="text-center mb-4">
        Nosso Cardápio ☕
      </h1>

      <div className="row mb-4">

        <div className="col-md-8">

          <input
            className="form-control form-control-lg"
            placeholder="🔍 Pesquise um café..."
            value={busca}
            onChange={(e)=>setBusca(e.target.value)}
          />

        </div>

        <div className="col-md-4">

          <select
            className="form-select form-select-lg"
            value={categoria}
            onChange={(e)=>setCategoria(e.target.value)}
          >

            {categorias.map(c=>(
              <option key={c}>{c}</option>
            ))}

          </select>

        </div>

      </div>

      <div className="row">

        {lista.map(produto=>(

          <div
            className="col-lg-3 col-md-6 mb-4"
            key={produto.id}
          >

            <div className="card h-100 shadow">

              <img
                src={produto.imagem}
                className="card-img-top"
                style={{
                  height:"220px",
                  objectFit:"cover"
                }}
              />

              <div className="card-body">

                <span className="badge bg-secondary mb-2">

                  {produto.categoria}

                </span>

                <h4>

                  {produto.nome}

                </h4>

                <div className="text-warning mb-2">

                  ★★★★★

                </div>

                <p>

                  {produto.descricao}

                </p>

                <h3 className="text-success">

                  R$ {produto.preco.toFixed(2)}

                </h3>

              </div>

              <div className="card-footer bg-white border-0">

                <div className="d-grid gap-2">

                  <button
                    className="btn btn-success"
                    onClick={()=>adicionarCarrinho(produto)}
                  >

                    <i className="bi bi-cart-plus"></i>

                    {" "}Adicionar

                  </button>

                  <Link
                    className="btn btn-outline-dark"
                    to={`/produto/${produto.id}`}
                  >

                    Ver detalhes

                  </Link>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );

}

export default Catalogo;