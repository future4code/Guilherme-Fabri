import React from "react";
import styled from 'styled-components';
import Header from "./components/Header";
import PlaylistCreationForm from "./components/PlaylistCreationForm";
import PlaylistManagerPage from "./components/PlaylistManagerPage";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: bisque;


`


export default class App extends React.Component {
  state = {
    currentPage: "playListManagerPage"
  }

/*https://www.loom.com/share/f210c6429eab46d3a1ed6526b7fff152
Gabarito Min25*/

  renderCurrentPage = () => {
    switch (this.state.currentPage) {
      case "playListCreationForm": 
        return <PlaylistCreationForm/>
      case "playListManagerPage":
        return <PlaylistManagerPage/>
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  render() {


    return (
    <AppContainer>
      <Header/>
      {this.renderCurrentPage()}
    </AppContainer>
    )
  }
}
