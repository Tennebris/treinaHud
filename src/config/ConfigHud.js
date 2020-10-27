import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View, Animated, PanResponder, LogBox, TouchableOpacity } from 'react-native';
// import * as ScreenOrientation from 'expo-screen-orientation';

import Pular from '../SvgBtns/pular';
import Correr from '../SvgBtns/correr';
import Mirar from '../SvgBtns/mirar';
import Agachar from '../SvgBtns/agachar';
import Atirar from '../SvgBtns/atirar';
import Gelo from '../SvgBtns/gelo';
import Analogico from '../SvgBtns/analogico';
import Trocar from '../SvgBtns/trocaArma';

LogBox.ignoreLogs(['Animated']);


const defaultConfig = {
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


	const savedConfig = useRef({
		"atirar": {
			"x": 0,
			"y": 0
		},
		"agachar": {
			"x": 0,
			"y": 0
		},
		"pular": {
			"x": 0,
			"y": 0
		},
		"mirar": {
			"x": 0,
			"y": 0
		},
		"atirarEsq": {
			"x": 0,
			"y": 0
		},
		"gel": {
			"x": 0,
			"y": 0
		},
		"Correr": {
			"x": 0,
			"y": 0
		},
		"Analogico": {
			"x": 0,
			"y": 0
		},
		"trocaArma": {
			"x": 100,
			"y": 0
		}
	}).current

	const config = useState(defaultConfig)[0];

	const [isDraging, setIsDraging] = useState(false);

	const atirarCoord = useRef(new Animated.ValueXY({x: config.atirar.x, y: config.atirar.y })).current;
	const atirar = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				atirarCoord.setOffset({
					x: atirarCoord.x._value,
					y: atirarCoord.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging(true);
				atirarCoord.setValue({ x: gesture.dx, y: gesture.dy });
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging(false);
				atirarCoord.flattenOffset();

				savedConfig.atirar = atirarCoord;
				console.warn(savedConfig);
			}
		})
	).current;

	const pularCoord = useRef(new Animated.ValueXY({x: config.pular.x, y: config.pular.y })).current;
	const pular = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				pularCoord.setOffset({
					x: pularCoord.x._value,
					y: pularCoord.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging(true);
				pularCoord.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging(false);
				pularCoord.flattenOffset();

				savedConfig.pular = pularCoord;
				console.warn(savedConfig);
			}
		})
	).current;

	const correrCoord = useRef(new Animated.ValueXY({x: config.Correr.x, y: config.Correr.y })).current;
	const correr = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				correrCoord.setOffset({
					x: correrCoord.x._value,
					y: correrCoord.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging(true);
				correrCoord.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging(false);
				correrCoord.flattenOffset();

				savedConfig.Correr = correrCoord;
				console.warn(savedConfig);
			}
		})
	).current;

	const mirarCoord = useRef(new Animated.ValueXY({x: config.mirar.x, y: config.mirar.y })).current;
	const mirar = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				mirarCoord.setOffset({
					x: mirarCoord.x._value,
					y: mirarCoord.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging(true);
				mirarCoord.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging(false);
				mirarCoord.flattenOffset();

				savedConfig.mirar = mirarCoord;
				console.warn(savedConfig);
			}
		})
	).current;

	const agacharCoord = useRef(new Animated.ValueXY({x: config.agachar.x, y: config.agachar.y })).current;
	const agachar = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				agacharCoord.setOffset({
					x: agacharCoord.x._value,
					y: agacharCoord.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging(true);
				agacharCoord.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging(false);
				agacharCoord.flattenOffset();

				savedConfig.agachar = agacharCoord
				console.warn(savedConfig);
			}
		})
	).current;

	const trocarCoord = useRef(new Animated.ValueXY({x: config.trocaArma.x, y:config.trocaArma.y })).current;

	const trocar = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				trocarCoord.setOffset({
					x: trocarCoord.x._value,
					y: trocarCoord.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging(true);
				trocarCoord.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging(false);
				trocarCoord.flattenOffset();

				savedConfig.trocaArma = trocarCoord;
				console.warn(savedConfig);
			}
		})
	).current;

	const joyCoord = useRef(new Animated.ValueXY({x: config.Analogico.x, y: config.Analogico.y })).current;
	const joy = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				joyCoord.setOffset({
					x: joyCoord.x._value,
					y: joyCoord.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging(true);
				joyCoord.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging(false);
				joyCoord.flattenOffset();

				savedConfig.Analogico = joyCoord;
				console.warn(savedConfig);
			}
		})
	).current;

	const geloCoord = useRef(new Animated.ValueXY({x: config.gel.x, y: config.gel.y })).current;
	const gelo = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				geloCoord.setOffset({
					x: geloCoord.x._value,
					y: geloCoord.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging(true);
				geloCoord.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging(false);
				geloCoord.flattenOffset();

				savedConfig.gel = geloCoord;
				console.warn(savedConfig);
			}
		})
	).current;

	const atirarEsqCoord = useRef(new Animated.ValueXY({x: config.atirarEsq.x, y: config.atirarEsq.y })).current;
	const atirarEsq = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: () => {
				atirarEsqCoord.setOffset({
					x: atirarEsqCoord.x._value,
					y: atirarEsqCoord.y._value
				});
			},
			onPanResponderMove: (event, gesture) => {
				setIsDraging(true);
				atirarEsqCoord.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderRelease: () => {
				setIsDraging(false);
				atirarEsqCoord.flattenOffset();

				savedConfig.atirarEsq = atirarEsqCoord;
				console.warn(savedConfig);
			}
		})
	).current;

	// useEffect(() => {
	// 	if(!isDraging){
	// 		console.warn(savedConfig)
	// 	}
	// },[isDraging]);

	return (
		<ImageBackground style={styles.container} >
			<StatusBar hidden={true} style="auto" />
			<Animated.View style={{position: 'absolute',transform: [{ translateX: atirarCoord.x }, { translateY: atirarCoord.y }] }} {...atirar.panHandlers} >
				<Atirar width={'180'} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: pularCoord.x }, { translateY: pularCoord.y }] }} {...pular.panHandlers} >
				<Pular width={'150'} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: agacharCoord.x }, { translateY: agacharCoord.y }] }} {...agachar.panHandlers} >
				<Agachar width={'150'} style={{ opacity: 0.8 }}/>
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: atirarEsqCoord.x }, { translateY: atirarEsqCoord.y }] }} {...atirarEsq.panHandlers} >
				<Atirar width={'150'} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: geloCoord.x }, { translateY: geloCoord.y }] }} {...gelo.panHandlers} >
				<Gelo width={'150'} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: mirarCoord.x }, { translateY: mirarCoord.y }] }} {...mirar.panHandlers} >
				<Mirar width={'150'} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: correrCoord.x }, { translateY: correrCoord.y }] }} {...correr.panHandlers} >
				<Correr width={'150'} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: joyCoord.x }, { translateY: joyCoord.y }] }} {...joy.panHandlers} >
				<Analogico width={'200'} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: trocarCoord.x }, { translateY: trocarCoord.y }] }} {...trocar.panHandlers} >
				<Trocar width={'150'} style={{ opacity: 0.8 }} />
			</Animated.View>

			<View style={styles.modal}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						atirarEsqCoord.setValue(config.atirarEsq);
						correrCoord.setValue(config.Correr);
						geloCoord.setValue(config.gel);
						joyCoord.setValue(config.Analogico);
						console.warn(joyCoord);
						trocarCoord.setValue(config.trocaArma);
						atirarCoord.setValue(config.atirar);
						mirarCoord.setValue(config.mirar);
						pularCoord.setValue(config.pular);
						agacharCoord.setValue(config.agachar);
					}}
				>
					<Text style={styles.btnText}>Redefinir</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.btn} >
					<Text style={styles.btnText}>Salvar</Text>
				</TouchableOpacity>
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
	},
	btn:{
		backgroundColor: 'lime',
		width: '50%',
		borderRadius: 10,
		paddingVertical: 20,
		marginHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modal:{
		position: 'relative',
		backgroundColor: '#000',
		width: '20%',
		height: '15%',
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 30,
		borderWidth: 4,
		borderColor: 'lime'
	},
	btnText:{
		fontSize: 20,
		fontWeight: 'bold'
	}
});
