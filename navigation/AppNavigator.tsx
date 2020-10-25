import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import ArticleScreen from '../screens/ArticleScreen'
import ClipScreen from '../screens/ClipScreen';
import { ArticleProp } from '../components/ListItem'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import { color } from 'react-native-reanimated'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="Article" component={ArticleScreen} options={{ headerShown: false}}/>
    </Stack.Navigator>
  )
}

const ClipStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Clip" component={ClipScreen} options={{ headerShown: false}}/>
    </Stack.Navigator>
  )
}

export type StackParamList = {
  Article: {article: ArticleProp}
}

const screenOption = ({route}) => ({
  tabBarIcon: ({color, size}: {color: string, size: number}) => {
    let iconName = 'home'
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Clip':
        iconName = 'bookmark';
        break;
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Tab.Navigator screenOptions={screenOption}>
       <Tab.Screen name="Top" component={HomeStack} />
       <Tab.Screen name="Clip" component={ClipStack} />
     </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
