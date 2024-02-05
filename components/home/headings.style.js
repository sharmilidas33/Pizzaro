import { StyleSheet } from "react-native"
import { COLORS, SIZES, FONTFAMILY } from "../../constants/index";

const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.medium,
        marginHorizontal: 12
    },
    header:{
        flexDirection:"row",
        justifyContent:'space-between',
    },
    headerTitle:{
        fontWeight: 'bold',
        fontSize: SIZES.xLarge -20,
        color: COLORS.black,
        fontFamily: 'poppins'
    }
})
export default styles;