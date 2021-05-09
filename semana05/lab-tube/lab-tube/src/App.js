import React from 'react';
import './App.css';
import {CardVideo} from "./components/CardVideo"
import ItensLista from './components/ItensLista';

export default function App() {

const titulo = "Título do Vídeo !!"

const name = ""



return (
    <div className="tela-inteira">
    <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
    </header>

    <main>
        <nav className="menu-vertical">
            <ul>
                <ItensLista itemlista={"Início"}/>
                <ItensLista itemlista={"Mais Vistos"}/>
                <ItensLista itemlista={"Histórico"}/>
                <hr />
                <ItensLista itemlista={"Fale com a gente"}/>
                <ItensLista itemlista={"Configurações"}/>
                <hr />
                <ItensLista itemlista={"Desconectar"}/>
            </ul>
        </nav>
        
        <section className="painel-de-videos">
            <CardVideo textocard={titulo} imagem={"https://picsum.photos/200/180?a=1"}/>
            <CardVideo textocard={"texto do video 2"} imagem={"https://picsum.photos/200/180?a=3"}/>
            <CardVideo textocard={"texto do video 3"} imagem={"https://picsum.photos/200/180?a=4"}/>
            <CardVideo textocard={"texto do video 4"} imagem={"https://picsum.photos/200/180?a=2"}/>
            <CardVideo textocard={"texto do video 5"} imagem={"https://picsum.photos/200/180?a=5"}/>
            <CardVideo textocard={"texto do video 6"} imagem={"https://picsum.photos/200/180?a=6"}/>
            <CardVideo textocard={"texto do video 7"} imagem={"https://picsum.photos/200/180?a=7"}/>
            <CardVideo textocard={"texto do video 8"} imagem={"https://picsum.photos/200/180?a=8"}/>
        </section>
    </main>

    <footer>
        <h4>Oi! Eu moro no footer!</h4>
    </footer>
</div>
)
}

