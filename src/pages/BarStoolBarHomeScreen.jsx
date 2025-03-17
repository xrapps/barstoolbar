import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text} from 'react-native';
import BarStoolBarHeader from '../components/BarStoolBarHeader';
import BarStoolBarMenuComponent from '../components/BarStoolBarMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {burgerApp2} from '../assets/products';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderProduct = ({item}) => <BarStoolBarMenuComponent item={item} />;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BarStoolBarHeader />

      <Text style={styles.title}>Меню</Text>

      <FlatList
        data={burgerApp2}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={{
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
