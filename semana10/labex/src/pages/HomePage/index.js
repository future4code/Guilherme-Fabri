import React from 'react'
import {ButtonsContainer} from './styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';

const HomePage = () => {
  return <div>
    <PageTitle title={'LabeX'}/>
    <ButtonsContainer>
      <Link to={'/inscricao'}>
      <Button variant={'contained'} color={'primary'}>Quero me candidatar</Button>
      </Link>
      <Link to={'/login'}>
      <Button variant={'contained'} color={'secundary'}>Área do administrador</Button>
      </Link>
    </ButtonsContainer>
  </div>
}

export default HomePage