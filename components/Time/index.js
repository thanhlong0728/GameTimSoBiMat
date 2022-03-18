import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import define from './../../contains/define'

const Time = ({onResponse, startGame, timeOut}) => {
    const [time, setTime] = useState(timeOut);

    useEffect(() =>{
        if(!startGame){
            setTime(define.TIME_DEFAULT)
        }else{
            if(time === 0 ) return
            const timeInterval = setInterval(() => {    
                const seconds = time -1
                setTime(seconds > 0 ? seconds : 0);
                if(seconds === 0){
                    clearInterval(timeInterval)
                    onResponse(true)
                }
            },1000);
            return () => {
                clearInterval(timeInterval)
            }
        }
       
    })
  return time
}

export default Time