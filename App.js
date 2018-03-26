import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import VolumeBalok from './src/latihan/VolumeBalok';
// import Header from './src/Cuaca/Header';
// import PrakiraanCuaca from './src/Cuaca/PrakiraanCuaca';
// import BelajarLayout from './src/latihan/BelajarLayout';
// import AppWeather from './src/AppWeather1515051053/AppWeather';
import AppWeatherAsync from './src/AppWeatherAsync1515051053/AppWeatherAsync';

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.containerMain}>
      //   <Header headerText={'Prakiraan Cuaca'} />
      //   <PrakiraanCuaca />
      // </View>
      // <BelajarLayout />
      // <AppWeather />
      <AppWeatherAsync />
    );
  }
}
// const styles = StyleSheet.create({
//   containerMain: {
//     flex: 1,
//   }
// });
