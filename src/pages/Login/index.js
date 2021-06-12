import React from 'react'
import {Text,TouchableOpacity,ImageBackground} from 'react-native';
import styled from 'styled-components';
import LinerGradient from 'react-native-linear-gradient';

const Logo = styled.Image`
width:300px;
height:500px;
display:flex;
align-self:center;
`;

const InSafeAreaView = styled.SafeAreaView`
width: 100%;
align-items: center;
justify-content: center;
`;
const InAreaView = styled.TouchableOpacity`
align-items: center;
justify-content: center;
z-index:99;
`;
const Messenger = styled.Text`
font-size:30px;
color:#FFF;
`;


const Login = ({navigation}) => {
    return(
        <InSafeAreaView>
            <ImageBackground style={{width: '100%',height: '100%'}} source={require('../../assets/imgs/backLogin.jpg')}>
                <LinerGradient colors={['rgba(0,0,0,1)','rgba(0,0,0,0)']} style={{position: 'absolute', top:0,height:400,width:'100%' }}/>
                <InAreaView onPress={()=>{
                    navigation.navigate('Main')}}>
                        
                    <Logo resizeMode="contain" source={require('../../assets/imgs/logoLogin2.png')} />
                    <Messenger> Touch the screen to continue </Messenger>
                </InAreaView>
                <LinerGradient colors={['rgba(0,0,0,0)','rgba(0,0,0,1)']} style={{position: 'absolute', bottom:0,height:400,width:'100%' }}/>
           </ImageBackground>
       </InSafeAreaView>
        
    );
}

export default Login;