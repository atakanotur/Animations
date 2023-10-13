import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  MyFirstAnimation,
  MySecondAnimation,
  CircleAnimation,
  SquareAnimation,
  ColorAnimation,
  LoadingCircleAnimation,
  Triangles,
} from '../animations';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const AnimationNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="First Animation">
      <Drawer.Screen name="First Animation" component={MyFirstAnimation} />
      <Drawer.Screen name="Second Animation" component={MySecondAnimation} />
      <Drawer.Screen name="Circle Animation" component={CircleAnimation} />
      <Drawer.Screen name="Square Animation" component={SquareAnimation} />
      <Drawer.Screen name="Color Animation" component={ColorAnimation} />
      <Drawer.Screen
        name="Loading Circle Animation"
        component={LoadingCircleAnimation}
      />
      <Drawer.Screen name="Triangles" component={Triangles} />
    </Drawer.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <AnimationNavigator />
  </NavigationContainer>
);
