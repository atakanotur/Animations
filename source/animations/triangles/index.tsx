import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Triangle from './triangle';
import {useSharedValue} from 'react-native-reanimated';

interface triangle {
  id: number;
  name: string;
  style: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 150,
    borderBottomWidth: 175,
    borderLeftWidth: 150,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    borderLeftColor: 'transparent',
  },
  blueTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 150,
    borderBottomWidth: 175,
    borderLeftWidth: 150,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'blue',
    borderLeftColor: 'transparent',
  },
  greenTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 150,
    borderBottomWidth: 175,
    borderLeftWidth: 150,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'green',
    borderLeftColor: 'transparent',
  },
});

const triangles: triangle[] = [
  {
    id: 0,
    name: 'red',
    style: styles.redTriangle,
  },
  {
    id: 1,
    name: 'blue',
    style: styles.blueTriangle,
  },
  {
    id: 2,
    name: 'black',
    style: styles.greenTriangle,
  },
];

const shuffleBack = useSharedValue(false);

const Triangles = () => {
  return (
    <View style={styles.container}>
      {triangles.map(t => {
        return (
          <Triangle
            id={t.id}
            name={t.name}
            style={t.style}
            shuffleBack={shuffleBack}
            key={t.id}
          />
        );
      })}
    </View>
  );
};

export default Triangles;
