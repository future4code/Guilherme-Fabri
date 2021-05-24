import React from "react";
import axios from "axios";

export default class App extends React.Component {
  /*Estado para poder guardar na nossa Aplicação os nossos dados */  
  state = {
    missions: []
  }


  componentDidMount() {
    this.getMission();
  }

  getMission = () => {
    axios.get("https://api.spacexdata.com/v3/missions")
    .then((res) => {
      console.log(res.data);
      this.setState({missions: res.data})
    }).catch((err) => {
      console.log(err)
    })
  };

  render() {
    const missionsList = this.state.missions.map((mission) => {
      return (
        /*Uma div para cada missão*/
        <div key={mission.mission_id}>
          <p>Nome: {mission.mission_name}</p>
          <p>Fabricantes: {mission.manufacturers.map((manufacturer) => <p>{manufacturer}</p>)}</p>
          <a href={mission.wikipedia}>Link para Wikipedia</a>
<hr/>
        </div>

      )
    }) 
    return <div>

      <h1>MISSÕES DA SPACEX</h1>
      {missionsList}
    </div>;
  }
}
