import React from "react";
import {Text,ScrollView,ImageBackground} from "react-native";
import styled from 'styled-components';


const Character = ({route}) => {

   const {character} =route.params;



    return (
        <Wallpaper  source={require('../../assets/imgs/backCharacter.jpg')}>
            <ContainerCharacter >
                <ImageProfile key={character.id} source={{uri:`${character.thumbnail.path}.${character.thumbnail.extension}`}} />
                <Square>
                    <ScrollView>
                    <Name>{character.name}</Name>
                    <Description>
                        <Text style={{fontWeight:'bold'}}>Description: </Text>
                        {character.description || 'Without description'}
                    </Description>
                    <Description>
                        <Text style={{fontWeight:'bold'}}>Appears in stories: </Text>
                       {character.stories.items.length || 'Without params'}
                    </Description>
                    </ScrollView>
                </Square>
            </ContainerCharacter>
        </Wallpaper>
    )


}

const Wallpaper = styled.ImageBackground`
flex: 1;
`;

const ContainerCharacter =styled.View`
align-items: center;
margin-top:50px;
`
const ImageProfile=styled.Image`
width: 200px;
height: 200px;
border-radius: 100px;
border: 1px solid red;
`

const Square=styled.View`
width:80%;
height:400px;
background-color: #fFF;
border-radius: 5px;
margin-top:30px;
padding:10px;
`
const Name =styled.Text`
font-size:30px;
text-align: center;
margin-bottom: 20px;
`
const Description =styled.Text`
font-size:20px;
margin-bottom: 20px;
`

export default Character;