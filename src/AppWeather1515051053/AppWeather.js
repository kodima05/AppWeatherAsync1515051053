import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

export default class AppWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }

  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=56da8a985259a0dda167e872b89039a9&units=metric';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text1}>Weather Forecast</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text2}>Masukkan Nama Kota </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(city) => this.setState({ city })}
          />
          <Button
            onPress={() => this.getWeather()}
            title="Cari"
            color="#1997E4"
            padding="10"
            accessibilityLabel="Klik untuk melihat cuaca"
          />
        </View>
        <View style={styles.box3}>
          <Text>Main : {this.state.forecast.main}</Text>
          <Text>Temperature : {this.state.forecast.temp}</Text>
          <Text>Description : {this.state.forecast.description}</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text1}>by Komang Aditya Pratama</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#00BFFF',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    backgroundColor: '#0000FF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    backgroundColor: '#1E90FF',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    backgroundColor: '#00ADFF',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    backgroundColor: '#0000BF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    color: 'white',
    fontSize: 20
  },
  text2: {
    color: 'black',
    fontSize: 20
  },
  textinput: {
    color: 'black',
    margin: 30
  }
});
