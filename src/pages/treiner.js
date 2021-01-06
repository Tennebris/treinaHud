import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, Dimensions, LogBox, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Pular from './SvgBtns/pular';
import Correr from './SvgBtns/correr';
import Mirar from './SvgBtns/mirar';
import Agachar from './SvgBtns/agachar';
import Atirar from './SvgBtns/atirar';
import Gelo from './SvgBtns/gelo';
import Analogico from './SvgBtns/analogico';
import Trocar from './SvgBtns/trocaArma';


LogBox.ignoreLogs(['Animated']);

const botoes = {
		"atirar": {
			"show": true,
			"x": Dimensions.get('window').width * 0.30,
			"y": Dimensions.get('window').height * 0.28
		},
		"agachar": {
			"show": true,
			"x": Dimensions.get('window').width * 0.40,
			"y": Dimensions.get('window').height * 0.39
		},
		"pular": {
			"show": true,
			"x": Dimensions.get('window').width * 0.45,
			"y": Dimensions.get('window').height * 0.18
		},
		"mirar": {
			"show": true,
			"x": Dimensions.get('window').width * 0.45,
			"y": -Dimensions.get('window').height * 0.05
		},
		"atirarEsq": {
			"show": true,
			"x": -Dimensions.get('window').width * 0.25,
			"y": -Dimensions.get('window').height * 0.08
		},
		"gel": {
			"show": true,
			"x": -Dimensions.get('window').width * 0.25,
			"y": Dimensions.get('window').height * 0.15
		},
		"Correr": {
			"show": true,
			"x": -Dimensions.get('window').width * 0.38,
			"y": -Dimensions.get('window').height * 0.08
		},
		"Analogico": {
			"show": true,
			"x": -Dimensions.get('window').width * 0.38,
			"y": Dimensions.get('window').height * 0.30
		},
		"trocaArma": {
			"show": true,
			"x": -Dimensions.get('window').width * 0.25,
			"y": -Dimensions.get('window').height * 0.40
		}
	}

export default function App() {
	const nav = useNavigation();

	const [hud,setHud] = useState();
	const [hudUsade, setHudUsade] = useState(hud != undefined ? hud : botoes);

	const gethud = useCallback(() => {
		(async () => {
			try{
				const asynchud = await AsyncStorage.getItem("@hud");
				const hudjson = JSON.parse(asynchud);
				setHud(hudjson);
			}catch (e){
				console.warn(e)
			}
		})()
	},[hud]);

	useEffect(() => {
		gethud()
	},[]);

	useEffect(() => {
		setHudUsade(hud)
	},[hud]);

	const {width,height} = Dimensions.get('window');

	return (
		<ImageBackground style={styles.container} >
			<StatusBar hidden={true} style="auto" />
			{!!hudUsade && (
			<>
				<View style={{position: 'absolute',transform: [{ translateX: hudUsade.atirar.x }, { translateY: hudUsade.atirar.y }] }} >
					<Atirar width={width * 0.11} />
				</View>

				<View style={{position: 'absolute',transform: [{ translateX: hudUsade.pular.x }, { translateY: hudUsade.pular.y }] }} >
					<Pular width={width * 0.11} />
				</View>

				<View style={{position: 'absolute',transform: [{ translateX: hudUsade.agachar.x }, { translateY: hudUsade.agachar.y }] }} >
					<Agachar width={width * 0.11}/>
				</View>

				<View style={{position: 'absolute',transform: [{ translateX: hudUsade.atirarEsq.x }, { translateY: hudUsade.atirarEsq.y }] }} >
					<Atirar width={width * 0.11} />
				</View>

				<View style={{position: 'absolute',transform: [{ translateX: hudUsade.gel.x }, { translateY: hudUsade.gel.y }] }} >
					<Gelo width={width * 0.11} />
				</View>

				<View style={{position: 'absolute',transform: [{ translateX: hudUsade.mirar.x }, { translateY: hudUsade.mirar.y }] }} >
					<Mirar width={width * 0.11} />
				</View>

				<View style={{position: 'absolute',transform: [{ translateX: hudUsade.Correr.x }, { translateY: hudUsade.Correr.y }] }} >
					<Correr width={width * 0.11} />
				</View>

				<View style={{position: 'absolute',transform: [{ translateX: hudUsade.Analogico.x }, { translateY: hudUsade.Analogico.y }] }} >
					<Analogico width={width * 0.12} />
				</View>

				<View style={{position: 'absolute',transform: [{ translateX: hudUsade.trocaArma.x }, { translateY: hudUsade.trocaArma.y }] }} >
					<Trocar width={width * 0.11} />
				</View>
			</>)}
			<TouchableHighlight style={styles.btn}
				onPress={() => nav.navigate('edit')}
			>
				<MaterialIcons name="settings" size={24} color="black" />
			</TouchableHighlight>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btn: {
		position: 'absolute',
		right: 20,
		top: 3
	}
});
