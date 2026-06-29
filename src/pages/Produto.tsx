import { useParams } from "react-router-dom";
import produtos from "../data/produtos.json";

interface Props {
  adicionarCarrinho: (produto: any) => void;
}

function Produto({ adicionarCarrinho }: Props) {

  const { id } = useParams();

  const produto = produtos.find(
    (p) => p.id === Number(id)
  );

  if (!produto) {
    return <h2>Produto não encontrado.</h2>;
  }

  return (
    <div className="row">

      <div className="col-md-6">

        <img
          src={produto.imagem}
          className="img-fluid rounded shadow"
        />

      </div>

      <div className="col-md-6">

        <h1>{produto.nome}</h1>

        <p>{produto.descricao}</p>

        <h3 className="text-success">
          R$ {produto.preco.toFixed(2)}
        </h3>

        <button
          className="btn btn-success"
          onClick={() => adicionarCarrinho(produto)}
        >
          Adicionar ao Carrinho
        </button>

      </div>

    </div>
  );
}

export default Produto;