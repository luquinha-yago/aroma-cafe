import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { HashRouter } from "react-router-dom";

import Header from "./Header";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Produto from "./pages/Produto";
import Carrinho from "./pages/Carrinho";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export interface ProdutoCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

function App() {

  const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([]);

  function adicionarCarrinho(produto: ProdutoCarrinho) {

    const existe = carrinho.find(p => p.id === produto.id);

    if (existe) {

        setCarrinho(

            carrinho.map(p =>

                p.id === produto.id
                ? {
                    ...p,
                    quantidade: p.quantidade + 1
                }
                : p

            )

        );

    } else {

        setCarrinho([

            ...carrinho,

            {
                ...produto,
                quantidade: 1
            }

        ]);

    }

}

function aumentarQuantidade(id:number){

    setCarrinho(

        carrinho.map(produto=>

            produto.id===id

            ? {
                ...produto,
                quantidade:produto.quantidade+1
            }

            : produto

        )

    );

}

function diminuirQuantidade(id:number){

    setCarrinho(

        carrinho.flatMap(produto=>{

            if(produto.id!==id) return [produto];

            if(produto.quantidade===1) return [];

            return [

                {

                    ...produto,

                    quantidade:produto.quantidade-1

                }

            ];

        })

    );

}

function removerCarrinho(id:number){

    setCarrinho(

        carrinho.filter(p=>p.id!==id)

    );

}

  return (

    <HashRouter>

      <Header quantidade={carrinho.length}/>

      <div className="container my-4">

        <Routes>

          <Route
            path="/"
            element={<Home/>}
          />

          <Route
            path="/catalogo"
            element={
              <Catalogo
                adicionarCarrinho={adicionarCarrinho}
              />
            }
          />

          <Route
            path="/produto/:id"
            element={
              <Produto
                adicionarCarrinho={adicionarCarrinho}
              />
            }
          />

          <Route
            path="/carrinho"
            element={
              <Carrinho
    carrinho={carrinho}
    removerCarrinho={removerCarrinho}
    aumentarQuantidade={aumentarQuantidade}
    diminuirQuantidade={diminuirQuantidade}
/>
            }
          />

          <Route
            path="/sobre"
            element={<Sobre/>}
          />

          <Route
            path="/contato"
            element={<Contato/>}
          />

        </Routes>
            <footer>

    <div className="container">

        <p>

            © 2026 Aroma Café - Todos os direitos reservados.

        </p>

    </div>

</footer>
      </div>

    </HashRouter>

  );

}

export default App;