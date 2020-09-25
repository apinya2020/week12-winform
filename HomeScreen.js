import *as React from 'react'//react 
import {View,Text,Button} from 'react-native'//react native

const HomeScreen=({navigation})=>{
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Home Screen</Text>
        <Button 
          title='Go to Details Screen' 
          onPress={()=>navigation.navigate('Details')} 
        />
        <Button 
          title='Go to Profile Screen' 
          onPress={()=>navigation.navigate('Profile')} 
        />
      </View>
    )
  }
  export default HomeScreen