import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants/index"

const styles = StyleSheet.create({
    container:{
        height: 230,
        width: 182,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary

    },
    imageContainer:{
        flex:1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: 'hidden'
    },
    image:{
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details:{
        padding: SIZES.small,
    },
    title:{
        fontWeight:"bold",
        fontSize: SIZES.large,
        marginBottom:2
    },
    price:{
        fontWeight:"bold",
        fontSize: SIZES.medium,   
    }
})
export default styles;