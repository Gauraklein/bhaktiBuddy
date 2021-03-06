import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/redux/rootReducer";

//SCREENS
import Home from "./src/screens/home/HomeComponent"
import Japa from "./src/screens/japa/JapaComponent"
import Reflections from "./src/screens/reflections/ReflectionsComponent"
import Progress from "./src/screens/progress/ProgressComponent"
import Calendar from "./src/screens/calendar/CalendarComponent"

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerShown: false
            // headerStyle: {
            //   backgroundColor: '#485460'
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen name="Japa" component={Japa} />
            <Stack.Screen name="Reflections" component={Reflections} />
            <Stack.Screen name="Progress" component={Progress} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </Display> */}
    </Provider>
  );
}
