import React,{useState,useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar,SafeAreaView,Text,Button} from 'react-native';

import Routes from './routes'

import axios from 'axios';
import md5 from "md5";
import styled from 'styled-components';


function App () {

  const baseUrl ='http://gateway.marvel.com/v1/public/characters?'
  const keyPub = '1193597e18755b4838042a6af41ea6bc';
  const keyPri ='ab9db82d12206e8e9ae0987e7ea51aecd0a533c5';
  const timeNow = Math.floor(Date.now() /1000);
  const hash = md5(timeNow+keyPri+keyPub);


  return(
    <PaperProvider>
      <StatusBar backgroundColor='#000'/>
     
      <Routes/>
    
    </PaperProvider>
  )
}

export default App;