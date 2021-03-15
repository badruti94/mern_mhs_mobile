const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row',
        margin: 14,
        backgroundColor: 'gray',
        padding: 5,
        borderRadius: 5,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    infoWrapper: {
        flex: 1,
        margin: 5
    },
    buttonWrapper: {
        marginTop: 15,
        padding: 3,
        margin: 1
    },

})

export default styles