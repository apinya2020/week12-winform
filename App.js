import *as React from 'react'//react 
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import ProfileScreen from './screens/ProfileScreen'
//react navigation
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const App=()=>{
  return(
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home"
      screenOptions={{
          //title:'My Home',
          headerTintColor:'#fff',
          headerTitleAlign:'center',
          headerStyle:{
          backgroundColor:'#f45aae'
        }
      }}
     >
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Details" component={DetailsScreen} />
       <Stack.Screen name="Profile" component={ProfileScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App

