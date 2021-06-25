import React from "react";
import PageTitle from "../../components/PageTitle";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormContainer } from "../../components/FormContainer";
import { InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useTripsList } from "../../hooks/useTripsList";

const ApplicationPage = () => {
  const trips = useTripsList()
  const [form, onChangeInput] = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: ''
  })
/* fizemos a hook useTripsList
  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guigs/trips"
      )
      .then((res) => {
        setTrips(res.data.trips);
      });
  }, []);*/

  //verificar se o formulário está funcionando
  //console.log(form)

  //enviar o formulário para a API

  const onSubmitApplication = (event) => {
    event.preventDefault()
    console.log(form)
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guigs/trips/${form.trip.id}/apply`, body)
  }

  return (
    <div>
      <PageTitle title={"Aplicar para Viagem"} />
      <FormContainer onSubmit={onSubmitApplication}>
        <TextField
          label={"Nome do Candidato"}
          onChange={onChangeInput}
          name={"name"}
          value={form["name"]}
        />
        <TextField
          label={"Idade"}
          type={"number"}
          onChange={onChangeInput}
          name={"age"}
          value={form["age"]}
        />
        <TextField
          label={"Texto de Aplicação"}
          helperText={"Explique por que você é um bom candidato"}
          onChange={onChangeInput}
          name={"applicationText"}
          value={form["applicationText"]}
        />
        <TextField
          label={"Profissão"}
          onChange={onChangeInput}
          name={"profession"}
          value={form["profession"]}
        />
        <FormControl>
          <InputLabel id="select-paises">Países</InputLabel>
          <Select
            labelId="select-paises"
            onChange={onChangeInput}
            name={"country"}
            value={form["country"]}
          >
            <MenuItem value={"BRA"}>Brasil</MenuItem>
            <MenuItem value={"ARG"}>Argentina</MenuItem>
            <MenuItem value={"EUA"}>Estados Unidos</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="select-viagens">Viagens</InputLabel>
          <Select
            labelId="select-viagens"
            onChange={onChangeInput}
            name={"trip"}
            value={form["trip"]}
          >
            {trips.map((trip) => {
              return <MenuItem value={trip}>{trip.name}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Inscrever-se
        </Button>
      </FormContainer>
    </div>
  );
};

export default ApplicationPage;
