import React from 'react';
import './App.css';
import {CardVideo} from "./components/CardVideo"
import ItensLista from './components/ItensLista';
import styled from "styled-components";

const MeuFooter = styled.footer`
background: #333b3e;
color: orange;
position: fixed;
bottom: 0;
width: 100%;
display: flex;
padding: 0 10px;
align-items: flex-start;
`

export default function App() {





function reproduzVideo(campotexto) {
        alert(`O ${campotexto} está sendo reproduzido`)
}

function abriuMenu(campopainel) {
    alert(`O Painel ${campopainel} está aberto`)
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
                <ItensLista 
                    itemlista={"Início"}
                    funcaoClickPainel={abriuMenu}
                />
                <ItensLista 
                    itemlista={"Mais Vistos"}
                    funcaoClickPainel={abriuMenu}
                />
                <ItensLista 
                    itemlista={"Histórico"}
                    funcaoClickPainel={abriuMenu}
                />
                <hr />
                <ItensLista 
                    itemlista={"Fale com a gente"}
                    funcaoClickPainel={abriuMenu}
                />
                <ItensLista 
                    itemlista={"Configurações"}
                    funcaoClickPainel={abriuMenu}
                />
                <hr />
                <ItensLista 
                    itemlista={"Desconectar"}
                    funcaoClickPainel={abriuMenu}
                />
            </ul>
        </nav>
        
        <section className="painel-de-videos">
            <CardVideo 
                textocard={"Vídeo 1"} 
                imagem={"https://picsum.photos/200/180?a=1"} 
                funcaoClick={reproduzVideo}
            />
            <CardVideo 
                textocard={"Vídeo 2"} 
                imagem={"https://picsum.photos/200/180?a=3"} 
                funcaoClick={reproduzVideo}
            />
            <CardVideo 
                textocard={"Vídeo 3"} 
                imagem={"https://picsum.photos/200/180?a=4"} 
                funcaoClick={reproduzVideo}
            />
            <CardVideo 
                textocard={"Vídeo 4"} 
                imagem={"https://picsum.photos/200/180?a=2"} 
                funcaoClick={reproduzVideo}
            />
            <CardVideo 
                textocard={"Vídeo 5"} 
                imagem={"https://picsum.photos/200/180?a=5"} 
                funcaoClick={reproduzVideo}
            />
            <CardVideo 
                textocard={"Vídeo 6"} 
                imagem={"https://picsum.photos/200/180?a=6"} 
                funcaoClick={reproduzVideo}
            />
            <CardVideo t
                textocard={"Vídeo 7"} 
                imagem={"https://picsum.photos/200/180?a=7"} 
                funcaoClick={reproduzVideo}
            />
            <CardVideo 
                textocard={"Vídeo 8"} 
                imagem={"https://picsum.photos/200/180?a=8"} 
                funcaoClick={reproduzVideo}
            />
        </section>
    </main>

    <MeuFooter>
        <h4>Oi! Eu moro no footer!</h4>
    </MeuFooter>
</div>
)
}

