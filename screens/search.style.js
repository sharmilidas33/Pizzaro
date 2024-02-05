import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";


const styles = StyleSheet.create({
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