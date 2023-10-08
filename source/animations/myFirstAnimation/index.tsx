import {View, Button} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

const MyFirstAnimation = () => {
  const width = useSharedValue(100);
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}></Animated.View>
      <Button onPress={handlePress} title="Click Me" />
    </View>
  );
};

export default MyFirstAnimation;
