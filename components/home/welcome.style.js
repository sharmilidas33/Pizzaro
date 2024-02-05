import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTFAMILY } from "../../constants/index";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        marginTop: SIZES.xSmall,
    },
    welcometxt:{
        fontFamily:'poppins',
        fontSize: SIZES.xLarge -5,
        color: COLORS.black,
        marginTop: SIZES.xSmall,
        marginHorizontal: 12,
        fontWeight:'bold',
    },
    welcometxt2:{
        fontFamily:'poppins',
        fontSize: SIZES.xLarge -6,
        color: COLORS.primary,
        marginTop: 0,
        marginHorizontal: 12,
        fontWeight:'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.large,
        marginVertical: SIZES.medium,
        height: 50,
        marginHorizontal: 12,
    },
    searchIcon: {
        marginHorizontal: 15,
        marginVertical:10,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.gray,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
        fontFamily: 'poppins',
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.small,
    },
})

export default styles;