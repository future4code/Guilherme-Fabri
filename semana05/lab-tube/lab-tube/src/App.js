import React from 'react';
import './App.css';

export default function App() {

  const titulo = "Título do Vídeo!!"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div class="tela-inteira">
    <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
    </header>

    <main>
        <nav class="menu-vertical">
            <ul>
                <li class="botoes-meunu-vertical">Início</li>
                <li class="botoes-meunu-vertical">Em alta</li>
                <li class="botoes-meunu-vertical">Inscrições</li>
                <hr />
                <li class="botoes-meunu-vertical">Originais</li>
                <li class="botoes-meunu-vertical">Histórico</li>
            </ul>
        </nav>
        
        <section class="painel-de-videos">
            <div class="box-pagina-principal media1" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=1 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div class="box-pagina-principal media2" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=2 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div class="box-pagina-principal media3" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=3 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div class="box-pagina-principal media4" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=4 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div class="box-pagina-principal media5" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=5 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div class="box-pagina-principal media6" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=6 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div class="box-pagina-principal media7" onClick={reproduzVideo}>
                <img src="https://picsum.photos/200/200?a=7 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div class="box-pagina-principal media8" onClick={reproduzVideo}>
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


