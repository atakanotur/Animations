import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

const ColorAnimation = () => {
  const backgroundColor = useSharedValue('#0E21A0');
  const colors = [
    {
      id: 0,
      color: '#0E21A0',
    },
    {
      id: 1,
      color: '#4D2DB7',
    },
    {
      id: 2,
      color: '#9D44C0',
    },
    {
      id: 3,
      color: '#EC53B0',
    },
    {
      id: 4,
      color: '#C70039',
    },
    {
      id: 5,
      color: '#3085C3',
    },
    {
      id: 6,
      color: '#1A5D1A',
    },
    {
      id: 7,
      color: '#862B0D',
    },
    {
      id: 8,
      color: '#61677A',
    },
  ];
  const handlePress = (color: any) => {
    backgroundColor.value = withTiming(color, {duration: 1500});
  };
  const colorsRenderItem = (item: any) => {
    console.log(item);
    return (
      <TouchableOpacity
        onPress={() => handlePress(item.item.color)}
        style={[
          styles.color,
          {backgroundColor: item.item.color},
        ]}></TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.colors}>
        <FlatList
          data={colors}
          renderItem={colorsRenderItem}
          horizontal={false}
          numColumns={3}
        />
      </View>
      <View style={styles.bottom}>
        <Animated.View
          style={[
            styles.colorCircle,
            {backgroundColor: backgroundColor},
          ]}></Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colors: {
    flex: 1,
  },
  color: {
    height: 100,
    width: 100,
    borderRadius: 100,
    margin: 10,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
  },
  colorCircle: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
});

export default ColorAnimation;
