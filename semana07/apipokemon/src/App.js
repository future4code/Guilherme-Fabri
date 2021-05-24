import axios from "axios";
import React from "react";

/*Colocar todos os nomes dos pokemons no select,
desde o momento que o usuário entrar na página,
quando queremos algo logo quando a página é montada,
colocamos nossa função (requisição) no componentDidMount
https://vimeo.com/552676901
MIN 7*/

export default class App extends React.Component {
  getPokemons = () => {
    axios
      .get("")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Pokemons</h1>
      </div>
    );
  }
}
