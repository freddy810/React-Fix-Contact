import { StyleSheet } from "react-native";

const voirContactSyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // Bloc 1
    bloc1: {
        backgroundColor: 'rgb(225, 237, 251)',
        paddingTop: 60,
        paddingBottom: 30,
        alignItems: 'center',
    },

    troisMenuHautVoir: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 30,
    },

    modifEtSuppr: {
        flexDirection: 'row',
    },

    iconUserVoir: {
        backgroundColor: 'white',
        width: 90,
        height: 90,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    nomContact: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
    },

    leQRCode: {
        marginTop: 5,
    },

    // Bloc 2
    bloc2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 30,
    },

    numeroEtSim: {
        marginLeft: 20,
        flex: 1,
    },

    numeroPhone: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    simPhone: {
        color: "gray",
    },

    // Bloc 3
    bloc3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 30,
    },

    numeroEtSim2: {
        marginLeft: 20,
    },

    numeroPhone2: {
        fontSize: 16,
    },

    // Message de succès
    messageSucces: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 16,
    },
});

export default voirContactSyle;
