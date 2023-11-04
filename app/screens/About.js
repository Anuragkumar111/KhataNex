import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Button from './Button';
import colors from '../config/colors';

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../assets/Image.png.png')}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.heading}>What is KhataNex?</Text>
        <Text style={styles.paragraph}>
          A one stop solution for all our SME needs, where a shop owner can
          track his sales, cusotmers, Due details, products listing and also get
          his sale reports on daily basis.
        </Text>
        <MaterialIcons
          style={styles.icon}
          size={40}
          color='grey'
          name='more-horiz'
        />
        <Button title='Next' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: '500',
    alignSelf: 'flex-start',
    paddingBottom: 20,
  },
  icon: {
    paddingTop: '40%',
  },
  image: {
    width: '100%',
    height: '100%',
    bottom: -65,
  },
  paragraph: {
    paddingLeft: 15,
    paddingRight: 15,
    // fontSize: 15,
    color: colors.darkText,
  },
  top: {
    flex: 1,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bottom: {
    flex: 1.2,
    alignItems: 'center',
    marginTop: 40,
    padding: 20,
  },
});
