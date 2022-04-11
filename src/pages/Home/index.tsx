import React from 'react';
import 'antd/dist/antd.min.css'
import * as C from './styled';

import img from '../../assets/image.png'

import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home: React.FC = () => {

  const history = useNavigate();
  
  return (
      <>
        <C.Container>
            <Header/>
            <C.Main>
                <C.SectionLeft>
                    <C.Description>
                        <C.Title>ÁREA DE GESTÃO</C.Title>
                            <C.P>Tenha acesso às informações dos pacientes, 
                                filtre e obtenha dados específicos de todos pacientes cadastrados no nosso sistema.
                            </C.P>
                        <C.Button onClick={() => { history('/list_users')}}>Entrar</C.Button>
                    </C.Description>
                </C.SectionLeft>
                <C.Sectionright>
                    <img src={img} alt="doctor" />
                </C.Sectionright>
            </C.Main>
            <Footer/>
        </C.Container>
       
        
      </>
  );
}

export default Home;