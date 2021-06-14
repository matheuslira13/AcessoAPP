import React from 'react';

import LinerGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

const Logo = styled.Image`
width:250px;
height:300px;
display:flex;
align-self: center;
z-index:99;
`;

const HeaderSafeAreaView = styled.SafeAreaView`
width: 100%;
`;

 const Header =() =>{
     return(
         <HeaderSafeAreaView>
            <LinerGradient colors={['rgba(0,0,0,1)','rgba(0,0,0,0)']} style={{position: 'absolute', top:0,height:400,width:'100%' }}/>
            <Logo resizeMode="contain" source={require('../../imgs/logoMain.png')} />
            
        </HeaderSafeAreaView>
         
     );
 }

 export default Header;