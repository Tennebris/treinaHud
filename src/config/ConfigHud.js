import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View, Animated, PanResponder, Dimensions, LogBox, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

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
	// (async () => {
	// 	await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
	// })();

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

	const {width,height} = Dimensions.get('window');

	return (
		<ImageBackground style={styles.container} >
			<StatusBar hidden={true} style="auto" />
			<Animated.View style={{position: 'absolute',transform: [{ translateX: atirarCoord.x }, { translateY: atirarCoord.y }] }} {...atirar.panHandlers} >
				<Atirar width={width * 0.11} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: pularCoord.x }, { translateY: pularCoord.y }] }} {...pular.panHandlers} >
				<Pular width={width * 0.11} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: agacharCoord.x }, { translateY: agacharCoord.y }] }} {...agachar.panHandlers} >
				<Agachar width={width * 0.11} style={{ opacity: 0.8 }}/>
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: atirarEsqCoord.x }, { translateY: atirarEsqCoord.y }] }} {...atirarEsq.panHandlers} >
				<Atirar width={width * 0.11} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: geloCoord.x }, { translateY: geloCoord.y }] }} {...gelo.panHandlers} >
				<Gelo width={width * 0.11} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: mirarCoord.x }, { translateY: mirarCoord.y }] }} {...mirar.panHandlers} >
				<Mirar width={width * 0.11} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: correrCoord.x }, { translateY: correrCoord.y }] }} {...correr.panHandlers} >
				<Correr width={width * 0.11} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: joyCoord.x }, { translateY: joyCoord.y }] }} {...joy.panHandlers} >
				<Analogico width={width * 0.12} style={{ opacity: 0.8 }} />
			</Animated.View>

			<Animated.View style={{position: 'absolute',transform: [{ translateX: trocarCoord.x }, { translateY: trocarCoord.y }] }} {...trocar.panHandlers} >
				<Trocar width={width * 0.11} style={{ opacity: 0.8 }} />
			</Animated.View>

			<View style={styles.modal}>
				<View style={styles.rangeContainer}>
					<Text style={{fontSize: 28, fontWeight: 'bold', alignSelf: 'center', color: 'white'}} >Arraste pra mover</Text>
					<Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}} >Transparência</Text>
					<Slider
						style={{width: 200, height: 40}}
						minimumValue={0}
						maximumValue={1}
						minimumTrackTintColor="#FFFFFF"
						maximumTrackTintColor="#000000"
					/>
					<Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}} >Tamanho</Text>
					<Slider
						style={{width: 200, height: 40}}
						minimumValue={0}
						maximumValue={1}
						minimumTrackTintColor="#FFFFFF"
						maximumTrackTintColor="#000000"
					/>
				</View>
				<View style={styles.hor}>
					<TouchableOpacity style={[styles.btn,{backgroundColor: 'grey'}]} >
						<Text style={styles.btnText}>Salvar</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.btn,{backgroundColor: 'grey'}]}
						onPress={() => {
							atirarEsqCoord.setValue(config.atirarEsq);
							correrCoord.setValue(config.Correr);
							geloCoord.setValue(config.gel);
							joyCoord.setValue(config.Analogico);
							trocarCoord.setValue(config.trocaArma);
							atirarCoord.setValue(config.atirar);
							mirarCoord.setValue(config.mirar);
							pularCoord.setValue(config.pular);
							agacharCoord.setValue(config.agachar);
						}}
					>
						<Text style={styles.btnText}>Redefinir</Text>
					</TouchableOpacity>

					<TouchableOpacity style={[styles.btn,{backgroundColor: '#fdb800'}]} >
						<Text style={[styles.btnText,{color: '#000'}]}>Salvar</Text>
					</TouchableOpacity>
				</View>
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
	btn:{
		marginHorizontal: 5,
		paddingVertical: 5,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2
	},
	modal:{
		backgroundColor: 'transparent',
		justifyContent: "center",
		alignItems: "center",
	},
	hor:{
		flexDirection: "row",
		marginBottom: 5
	},
	rangeContainer:{
		width: '96.7%',
		backgroundColor: 'rgba(0,0,0,0.7)',
		marginBottom: 10,
		paddingHorizontal: 20,
		paddingBottom: 20,
		paddingTop: 10,
		borderRadius: 2
	},
	btnText:{
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
	}
});
