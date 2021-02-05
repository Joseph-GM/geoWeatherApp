/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Geolocation from '@react-native-community/geolocation';
import Weather from './components/Weather';
import {API_KEY} from './utils/WeatherApiKey';

class App extends Component {
	state = {
    isLoading: true,
    isReloading: false,
    temperature: 0,
    weatherCondition: null,
		error: null,
	};

	componentDidMount () {
		Geolocation.getCurrentPosition(
			position => {
				this.fetchWeather(position.coords.latitude, position.coords.longitude);
			},
			error => {
				this.setState({
					error: 'Error Getting Weather Conditions'
				});
			}
		);
  }

  componentDidUpate () {
    if (this.props.isReloading) {
      console.log("componentDidupdate");
      this.settingReload();
    }
  }
  
  fetchWeather(lat = 25, lon = 25) {
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
		)
			.then(res => res.json())
			.then(json => {
				this.setState({
					temperature: json.main.temp,
					weatherCondition: json.weather[0].main,
          isLoading: false,
          isReloading: false,
        });
        console.log("fetching: ",this.state.temperature,this.state.weatherCondition);
			});
	}

  settingReload() {
    this.setState({
      isReloading: false,
    })
  }
  clickLogFuc() {
    console.log("I'm Working");
    this.setState({
      isReloading: true,
    })
  }

	render() {
    const {isLoading} = this.state;
    console.log("render")
		return (
			<View style={styles.container}>
				{isLoading ? <Text>Fetching The Weather</Text> : <Weather 
            weather={this.state.weatherCondition}
            temperature={this.state.temperature}
            onChildClick={this.clickLogFuc.bind(this)}
        />}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
  }
})

export default App;
