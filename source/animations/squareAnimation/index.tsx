import {View, StyleSheet, Button} from 'react-native';
import Animated, {
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const SquareAnimation = () => {
  const height = useSharedValue(10);
  const width = useSharedValue(10);
  const translateY = useSharedValue(50);
  const translateX = useSharedValue(-50);
  const handlePress = () => {
    height.value = withSequence(
      withTiming(100),
      withTiming(10),
      withDelay(400, withTiming(100)),
      withDelay(0, withTiming(10)),
    );
    translateY.value = withSequence(
      withTiming(5),
      withTiming(-50),
      withDelay(400, withTiming(5)),
      withDelay(0, withTiming(50)),
    );
    width.value = withSequence(
      withDelay(450, withTiming(100)),
      withDelay(0, withTiming(10)),
      withDelay(450, withTiming(100)),
      withDelay(0, withTiming(10)),
    );
    translateX.value = withSequence(
      withDelay(450, withTiming(-5)),
      withDelay(0, withTiming(50)),
      withDelay(450, withTiming(5)),
      withDelay(0, withTiming(-50)),
    );

    // width.value = withTiming(width.value + 200);
    // height.value = withDelay(1000, withTiming(height.value - 90));
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            width,
            height,
            transform: [{translateX: translateX}, {translateY: translateY}],
          },
        ]}></Animated.View>
      <Button onPress={handlePress} title="Click Me" />
      {/* <Button onPress={handlePressv2} title="Click Me v2" />
      <Button onPress={handlePressv3} title="Click Me v3" />
      <Button onPress={handlePressv4} title="Click Me v4" />
      <Button onPress={handlePressv5} title="Click Me v5" />
      <Button onPress={handlePressv6} title="Click Me v6" />
      <Button onPress={handlePressv7} title="Click Me v7" />
      <Button onPress={handlePressv8} title="Click Me v8" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 10,
    height: 10,
    backgroundColor: 'purple',
  },
});

export default SquareAnimation;
