import { StyleSheet } from "react-native";
import colors from "../../contains/colors";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 58,
        paddingVertical: 26,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 21
      },
      modalBoxScore: {
        flexDirection: 'row',
        marginBottom: 18,
        alignItems: 'flex-end'
      },
      modalBoxScoreText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        marginRight: 36
      },
      modalBoxScoreNumber: {
        color: colors.numberScore,
        fontWeight: 'bold',
        fontSize: 72,
      },
      modalButton: {
        flexDirection: 'row',
        backgroundColor: colors.four,
        paddingHorizontal: 27,
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center'
      },
      modalButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.one,
        marginLeft: 15
      }
})

export default styles