import {useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import Svg, {Circle} from 'react-native-svg';

const {width, height} = Dimensions.get('window');
const circleLenght = 1000;
const r = circleLenght / (2 * Math.PI);

const LoadingCircleAnimation = () => {
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, {duration: 2000});
  }, []);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circleLenght * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });
  return (
    <View style={styles.container}>
      <ReText style={styles.progressText} text={progressText} />
      <Svg style={{position: 'absolute', bottom: 45}}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={r}
          stroke={'#303858'}
          strokeWidth={30}
          fillOpacity={0}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={r}
          stroke={'#A6E1FA'}
          strokeWidth={15}
          strokeDasharray={circleLenght}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
          fillOpacity={0}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444B6F',
  },
  progressText: {
    fontSize: 80,
    color: 'rgba(256,256,256,0.7)',
  },
});

export default LoadingCircleAnimation;
