import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TripInfoItem from './TripInfoItem';


//recebe props 
const TripInfo = (props) => {
//vamos desconstruir props.

const {name, planet, description, date, durationInDays} = props.info
  return <Card>
  <CardContent>
    <Typography variant={'h5'} color="textSecondary" gutterBottom>
      Informações da Viagem
    </Typography>
    <Typography variant="h5" component="h2">
    </Typography>
    <TripInfoItem infoName={'Nome'} info={name}/>
    <TripInfoItem infoName={'Planeta'} info={planet}/>
    <TripInfoItem infoName={'Data'} info={date}/>
    <TripInfoItem infoName={'Descrição'} info={description}/>
    <TripInfoItem infoName={'Duração em dias'} info={durationInDays}/>
  </CardContent>
</Card>
}

export default TripInfo