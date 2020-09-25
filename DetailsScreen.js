import *as React from 'react'//react 
import {View,Text,Button} from 'react-native'//react native

const DetailsScreen=({navigation})=>(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <Button 
        title='Go to Home Screen' 
        onPress={()=>navigation.navigate('Home')} 
      />
    </View>
  )
  export default DetailsScreen