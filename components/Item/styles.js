import {StyleSheet,Dimensions} from 'react-native'
import colors from '../../contains/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 128 

const styles = StyleSheet.create({
    container: {
        width: width/5,
        height: height/10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: 'green',
        borderRadius: 100,
    },
    itemNumber: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingHorizontal: 12,
        paddingVertical: 8,
        color: colors.background
    },
    bg_one: {
        backgroundColor: colors.one,
        borderColor: colors.one
    },
    bg_two: {
        backgroundColor: colors.two,
        borderColor: colors.two
    },
    bg_three: {
        backgroundColor: colors.three,
        borderColor: colors.three
    },
    bg_four: {
        backgroundColor: colors.four,
        borderColor: colors.four
    },
    bg_five: {
        backgroundColor: colors.five,
        borderColor: colors.five
    },
    active: {
        backgroundColor: colors.active,
        borderColor: colors.active,
    },
    activeNumber: {
        color: colors.two
    }
})
export default styles;