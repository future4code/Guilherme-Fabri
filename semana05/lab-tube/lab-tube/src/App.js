import React from 'react';
import './App.css';

export default function App() {

  const titulo = "Título do Vídeo!!"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div className="tela-inteira">
    <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
    </header>

    <main>
        <nav className="menu-vertical">
            <ul>
                <li className="botoes-meunu-vertical">Início</li>
                <li className="botoes-meunu-vertical">Em alta</li>
                <li className="botoes-meunu-vertical">Inscrições</li>
                <hr />
                <li className="botoes-meunu-vertical">Originais</li>
                <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
        </nav>
        
        <section className="painel-de-videos">
            <div className="card0" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=1 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="card1" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=2 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="card2" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=3 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="card3" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=4 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="card4" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=5 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="card5" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=6 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="card6" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=7 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="card7" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=8 " alt="" />
                <h4>{titulo}</h4>
            </div>
        </section>
    </main>

    <footer>
        <h4>Oi! Eu moro no footer!</h4>
    </footer>
</div>
)
}

