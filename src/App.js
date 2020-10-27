import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, Animated, PanResponder, LogBox } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

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
			"x": 433,
			"y": 175
		},
		"agachar": {
			"x": 610,
			"y": 285
		},
		"pular": {
			"x": 700,
			"y": 165
		},
		"mirar": {
			"x": 702,
			"y": 30
		},
		"atirarEsq": {
			"x": -345,
			"y": -55
		},
		"gel": {
			"x": -345,
			"y": 80
		},
		"Correr": {
			"x": -520,
			"y": -45
		},
		"Analogico": {
			"x": -520,
			"y": 250
		},
		"trocaArma": {
			"x": -420,
			"y": -250
		}
	}

export default function App() {
	(async () => {
		await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
	})();
	const [isDraging, setIsDraging] = useState('nada')
	const pan = useRef(new Animated.ValueXY()).current;

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				pan.setOffset({
					x: pan.x._value,
					y: pan.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging('junior');
				pan.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging('maria');
				pan.flattenOffset();
			}
		})
	).current;

	useEffect(() => {
		console.warn(pan)
	},[isDraging])

	return (
		<ImageBackground style={styles.container} >
			<StatusBar hidden={true} style="auto" />
			<View style={{position: 'absolute',transform: [{ translateX: botoes.atirar.x }, { translateY: botoes.atirar.y }] }} >
				<Atirar width={'180'} />
			</View>

			<View style={{position: 'absolute',transform: [{ translateX: botoes.pular.x }, { translateY: botoes.pular.y }] }} >
				<Pular width={'150'} />
			</View>

			<View style={{position: 'absolute',transform: [{ translateX: botoes.agachar.x }, { translateY: botoes.agachar.y }] }} >
				<Agachar width={'150'}/>
			</View>

			<View style={{position: 'absolute',transform: [{ translateX: botoes.atirarEsq.x }, { translateY: botoes.atirarEsq.y }] }} >
				<Atirar width={'150'} />
			</View>

			<View style={{position: 'absolute',transform: [{ translateX: botoes.gel.x }, { translateY: botoes.gel.y }] }} >
				<Gelo width={'150'} />
			</View>

			<View style={{position: 'absolute',transform: [{ translateX: botoes.mirar.x }, { translateY: botoes.mirar.y }] }} >
				<Mirar width={'150'} />
			</View>

			<View style={{position: 'absolute',transform: [{ translateX: botoes.Correr.x }, { translateY: botoes.Correr.y }] }} >
				<Correr width={'150'} />
			</View>

			<View style={{position: 'absolute',transform: [{ translateX: botoes.Analogico.x }, { translateY: botoes.Analogico.y }] }} >
				<Analogico width={'200'} />
			</View>

			<View style={{position: 'absolute',transform: [{ translateX: botoes.trocaArma.x }, { translateY: botoes.trocaArma.y }] }} >
				<Trocar width={'150'} />
			</View>
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
	button: {
		borderWidth: 3,
		borderColor: 'black',
		backgroundColor: 'white',
		borderRadius: 75,
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute'
	}
});
