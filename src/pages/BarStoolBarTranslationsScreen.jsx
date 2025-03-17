import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BarStoolBarHeader from '../components/BarStoolBarHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BarStoolBarHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NBA', '01.04 20:00', 'Golden State Warriors \n' + 'Los Angeles Lakers')}
        {renderBroadcast('EuroLeague', '04.04 19:30', 'Real Madrid \n' + 'CSKA Moscow')}
        {renderBroadcast('NCAA', '07.04 22:15', 'Duke \n' + 'North Carolina')}
        {renderBroadcast('WNBA', '10.04 18:45', 'Chicago Sky \n' + 'Seattle Storm')}
        {renderBroadcast('FIBA', '13.04 17:30', 'USA \n' + 'Spain')}
        {renderBroadcast('CBA', '16.04 21:00', 'Guangdong Tigers \n' + 'Beijing Ducks')}
        {renderBroadcast('Liga ACB', '19.04 20:15', 'Barcelona \n' + 'Real Madrid')}
        {renderBroadcast('NBL', '22.04 23:45', 'Melbourne United \n' + 'Sydney Kings')}
        {renderBroadcast('PBA', '25.04 15:00', 'San Miguel Beermen \n' + 'Barangay Ginebra')}
        {renderBroadcast('VTB UL', '28.04 19:00', 'Zenit \n' + 'Khimki')}

      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
  },
  league: {
    fontSize: 22,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '60%',
    marginLeft: 15,
    opacity: 0.8,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
