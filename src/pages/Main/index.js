import React, { useState, useEffect } from 'react';
import Header from '../../assets/components/Header'
import { RefreshControl, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

import api from '../../services/api'



const Main = () => {

  useEffect(() => { // UseEffect para fazer a chamada da api
    getMain();
  }, [])

  const navigation = useNavigation(); // Navigation para ir para pagina Character

  const [main, setMain] = useState([]); // Resultado da API
  const [refreshPage, setRefreshPage] = useState(false); // Refresh da Pagina
  const [carregando, setCarregando] = useState(true); // UM Loading enquanto carrega a imagem da API

  const getMain = async () => { // Inicio da chamda da API
    setRefreshPage(true);
    try {
     
      api.get()
        .then(response => {
          setMain(response.data.data.results);
        })

      setRefreshPage(false);
   

    } catch (err) {
      setRefreshPage(false);
      alert(err);
    }
  }


  return (
    // Todos components feito com styled components por isso o nome esta diferente e estao em ordem de uso 
    // e localizado no final do codigo

    <Wallpaper style={{ flex: 1 }} source={require('../../assets/imgs/back.jpg')}>

      {carregando &&                   // condicional para exibir o Loanding
        <ContainerLoading>
          <Loading source={require('../../assets/imgs/gif.gif')} />
        </ContainerLoading>
      }

      <ContainerApp>

        <ListCharacter
          refreshControl={<RefreshControl
            refreshing={refreshPage}
            onRefresh={getMain}              // Chamar novamente a API se quiser
          />}
          data={main}
          ListHeaderComponent={() => (<Header />)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <BlockTouch onPress={() => { navigation.navigate('Character', { character: item }) }} >

              <NameOfChar> {item.name} </NameOfChar>
              <BlockCharacter  >
                <ImgMain
                  resizeMode='cover'
                  onLoadEnd={setCarregando(false)}
                  defaultSource={require('../../assets/imgs/placeholder.png')}
                  onError={(e) => { alert(e.nativeEvent.error) }}
                  source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
              </BlockCharacter>
            </BlockTouch>

          )}
        />

      </ContainerApp>

    </Wallpaper>

  )
}

const Wallpaper = styled.ImageBackground`
    flex: 1;
`
const ContainerLoading = styled.SafeAreaView`
    width: 100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
`;

const Loading = styled.Image`
    position: absolute;
    top: 30%;
    z-index:999;
`;

const ContainerApp = styled.View`
    display:flex;
    justify-content:center;
    align-items:center;
 `;

const ListCharacter = styled.FlatList`
    width: 100%;
    height: 100%;       
`;

const BlockTouch = styled.TouchableOpacity`
    justify-content:center;
    align-items: center;
`;
const NameOfChar = styled.Text`
    text-align:center;
    font-size:20px;
    color:#fff;
`;

const BlockCharacter = styled.View`
    width:320px;
    height:400px;
    background-color:rgba(0,0,0,0.8);
    border-radius:5px;
`;

const ImgMain = styled.Image`
    width:300px;
    height:380px;
    border-radius:5px;
    display:flex;
    margin: auto;
`;


export default Main;