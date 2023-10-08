import {StyleSheet, View, Button} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

const MySecondAnimation = () => {
  const translateX = useSharedValue(0);
  const handlePress = () => {
    translateX.value = withSpring(translateX.value + 30); //
  };
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(translateX.value * 2)}],
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]}></Animated.View>
      <Button onPress={handlePress} title="Click Me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});

export default MySecondAnimation;
