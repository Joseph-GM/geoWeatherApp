import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Weather = ({weather, temperature, onChildClick}) => {
	return (
		<View style={styles.weatherContainer}>
			<View style={styles.headerContainer}>
				<Icon size={48} name="weather-sunny" color={'#fff'} />
                <Text style={styles.tempText}>{temperature}˚</Text>
			</View>
			<View style={styles.bodyContainer}>
				<Text style={styles.title}>{weather}</Text>
				<Text style={styles.subtitle}>It hurts my eyes!</Text>
			</View>
            <View styel={styles.buttonContainer}>
                <Button title="Reload" onPress={onChildClick}/>
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
	weatherContainer: {
		flex: 1,
		backgroundColor: '#f7b733'
	},
	headerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	tempText: {
		fontSize: 48,
		color: '#fff'
	},
	bodyContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingLeft: 25,
        marginBottom: 40,
    },
    buttonContainer: {
        flex: 2,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingLeft: 25,
        marginBottom: 10,
    },
	title: {
		fontSize: 48,
		color: '#fff'
	},
	subtitle: {
		fontSize: 24,
		color: '#fff'
	}
});

export default Weather;