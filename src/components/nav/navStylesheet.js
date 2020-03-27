import {StyleSheet} from "react-native"

export const navStyles = StyleSheet.create({
    navParent: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#404b56",
        color: "white",
        paddingTop: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,  
    },
    navIconContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // borderColor: "white",
        // borderTopColor: "white",
        // borderWidth: 5,
        marginBottom: 100,
        alignItems: "center"
    }

})