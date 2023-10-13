import {View, StyleSheet, Dimensions, ViewStyle, StyleProp} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {snapPoint} from 'react-native-redash';

const {width, height} = Dimensions.get('window');

const SNAP_POINTS = [-width, 0, width];

interface TriangleProps {
  id: number;
  name: string;
  style: StyleProp<ViewStyle>;
}

const Triangle = (props: TriangleProps) => {
  const {id, name, style} = props;
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const rotateZ = useSharedValue(Math.random() * 30 - 10);
  const scale = useSharedValue(1);
  const triangelsStyle = useAnimatedStyle(() => ({
    transform: [
      {rotateX: '30deg'},
      {rotateZ: `${rotateZ.value}deg`},
      {translateX: x.value},
      {translateY: y.value},
      {scale: scale.value},
    ],
  }));
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number; y: number}
  >({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
      scale.value = withTiming(1.1);
      rotateZ.value = withTiming(0);
    },
    onActive: ({translationX, translationY}, ctx) => {
      x.value = ctx.x + translationX;
      y.value = ctx.y + translationY;
    },
    onEnd: ({velocityX, velocityY}) => {
      const dest = snapPoint(x.value, velocityX, SNAP_POINTS);
      x.value = withSpring(dest, {velocity: velocityX});
      y.value = withSpring(0, {velocity: velocityY});
      scale.value = withTiming(1);
    },
  });

  return (
    <View style={styles.container} pointerEvents="box-none">
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View id={'0'} style={[style, triangelsStyle]}></Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Triangle;
