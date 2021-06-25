import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import axios from 'axios';


const CandidateItem = (props) => {

  

  const aproveCandidate = () => {
    console.log('Aprova!')
    props.decideCandidate(true, props.candidate.id)
  }

  const refuseCandidate = () => {
    console.log('Recusado')
    props.decideCandidate(false, props.candidate.id)
  }

  return  <ListItem>
  <ListItemText primary={props.candidate.name} />
  <ListItemSecondaryAction>
    <IconButton onClick={aproveCandidate}>
      <ThumbUpIcon />
    </IconButton>
    <IconButton onClick={refuseCandidate}>
      <ThumbDownIcon />
    </IconButton>
  </ListItemSecondaryAction>
</ListItem>
}

export default CandidateItem