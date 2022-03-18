import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

const Item = ({value, bg, onChoice, score}) => {
  const active = value <= score ? styles.active : {};
  const activeNumber = value <= score ? styles.activeNumber : {};
  return (
    <TouchableOpacity style={styles.container} onPress={() => onChoice(value)}>
        <View style={[styles.item, bg, active]}>
            <Text style={[styles.itemNumber, activeNumber]}>{value < 10 ?`0${value}` : value}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Item