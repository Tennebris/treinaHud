import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, Animated, PanResponder, Dimensions, LogBox } from 'react-native';
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
	const {width,height} = Dimensions.get('window');

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
		// console.warn(pan)
	},[isDraging])

	return (
		<ImageBackground style={styles.container} >
			<StatusBar hidden={true} style="auto" />
			{botoes.atirar.show && <View style={{position: 'absolute',transform: [{ translateX: botoes.atirar.x }, { translateY: botoes.atirar.y }] }} >
				<Atirar width={width * 0.11} />
			</View>}

			{botoes.atirar.show &&<View style={{position: 'absolute',transform: [{ translateX: botoes.pular.x }, { translateY: botoes.pular.y }] }} >
				<Pular width={width * 0.11} />
			</View>}

			{botoes.agachar.show &&<View style={{position: 'absolute',transform: [{ translateX: botoes.agachar.x }, { translateY: botoes.agachar.y }] }} >
				<Agachar width={width * 0.11}/>
			</View>}

			{botoes.atirarEsq.show &&<View style={{position: 'absolute',transform: [{ translateX: botoes.atirarEsq.x }, { translateY: botoes.atirarEsq.y }] }} >
				<Atirar width={width * 0.11} />
			</View>}

			{botoes.gel.show &&<View style={{position: 'absolute',transform: [{ translateX: botoes.gel.x }, { translateY: botoes.gel.y }] }} >
				<Gelo width={width * 0.11} />
			</View>}

			{botoes.mirar.show &&<View style={{position: 'absolute',transform: [{ translateX: botoes.mirar.x }, { translateY: botoes.mirar.y }] }} >
				<Mirar width={width * 0.11} />
			</View>}

			{botoes.Correr.show &&<View style={{position: 'absolute',transform: [{ translateX: botoes.Correr.x }, { translateY: botoes.Correr.y }] }} >
				<Correr width={width * 0.11} />
			</View>}

			{botoes.Analogico.show &&<View style={{position: 'absolute',transform: [{ translateX: botoes.Analogico.x }, { translateY: botoes.Analogico.y }] }} >
				<Analogico width={width * 0.12} />
			</View>}

			{botoes.trocaArma.show && <View style={{position: 'absolute',transform: [{ translateX: botoes.trocaArma.x }, { translateY: botoes.trocaArma.y }] }} >
				<Trocar width={width * 0.11} />
			</View>}
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
});
