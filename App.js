import { Text, View, ImageBackground, StatusBar, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 

import styles from './App.components.style'
import background from './assets/image/bg.png'
import colors from './contains/colors'
import Item from './components/Item'
import EndGame from './components/EndGame'
import styleItem from './components/Item/styles'
import Time from './components/Time'
import define from './contains/define'
// no no 
const shuffle = (array) => array.sort(() => Math.random() - 0.5);
const bgConstant = [styleItem.bg_one, styleItem.bg_two, styleItem.bg_three, styleItem.bg_four, styleItem.bg_five]
let arrBg = []
for (let i = 0; i <= 10; i++) {
  arrBg = [...arrBg,...bgConstant]
}

const dataShuffle = () =>shuffle(Array.from({length : 50},(_,i) => i+1))
const bgShuffle = () =>shuffle(arrBg)

const dataInit = dataShuffle()
const bgInit = bgShuffle()

export default function App() {
  const [startGame, setStartGame] = useState(false)
  const [items, setItems]  = useState(dataInit) 
  const [bg, setBg]        = useState(bgInit)
  const [numberNext, setNumberNext] = useState(define.NUMBER_START)
  const [endGame, setEndGame] = useState(false)
  const [timeOut, setTimeOut] = useState(define.TIME_DEFAULT)
  const [highScore, setHighScore] = useState(0)

  const score = numberNext - 1;

  const onChoice = (value) => {
    if (value === define.NUMBER_START ) {
      setStartGame(true)
    }
    if (value === numberNext) {
      if (value > highScore) {
        setHighScore(value)
      }
      setNumberNext(value + 1)
    } else {
      setStartGame(false)
      setEndGame(true)
    }
  }
  const onClose = () =>{
    setNumberNext(define.NUMBER_START)
    setEndGame(false)
    setStartGame(false)
    setItems(dataShuffle())
    setBg(bgShuffle())
  }

  const onResponse = (isTimeOut) =>{
    if(isTimeOut){
      if(score > highScore){
        setHighScore(value)
      }
      setEndGame(true)
    }
  }

  return (
    <>
      <StatusBar hidden = {true} />
      <ImageBackground source={background} style={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
            <View style={styles.info}>
               <View style={styles.infoScores}>
                   <FontAwesome name="money" size={24} color="colors.one" />
                   <Text style={styles.infoText}>{highScore}</Text>
               </View>
               <View style={styles.infoTime}>
                   <FontAwesome name="clock-o" size={24} color="colors.one" />
                   <Text style={styles.infoText}>
                      <Time 
                          onResponse={onResponse}
                          startGame={startGame}
                          timeOut={timeOut}
                      />
                   </Text>
               </View>
            </View>
            <View style={styles.play}>
              {
                items.map((val,index) => 
                <Item 
                  key={index.toString()}
                  value={val}
                  bg={bg[index]}
                  onChoice = {onChoice}
                  score={score}
                />
              )
              }
            </View>
            <EndGame 
                isVisible={endGame}
                onClose={onClose}
                score={score}
            />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

