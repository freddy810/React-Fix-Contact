//pour rendre le projet responsive
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { StyleSheet } from "react-native";

const ajoutContactSyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //------------Menu en haut----------------------------------------------
    menuEnHaut: {
        flexDirection: 'row',
        width: width * 1,
        marginLeft: width * 0.1,
        position: 'absolute', top: height * 0.065,
    },

    iconRetourt: {
        marginRight: width * 0.05,
    },

    textCreation: {
        marginRight: width * 0.15,
    },

    //------------icon usert----------------------------------------------
    iconUser: {
        backgroundColor: 'rgb(184, 212, 252)',
        paddingLeft: height * 0.03, paddingRight: height * 0.03,
        paddingTop: height * 0.025, paddingBottom: height * 0.02,
        borderRadius: 100,
        position: 'absolute',
        top: height * 0.145,
    },

    //-----------les champs à fournir-------------------------------------
    blockChamp: {
        width: width * 1,
        marginLeft: width * 0.1,
        position: 'absolute',
        top: height * 0.320,
    },

    lesChamps: {
        flexDirection: 'row',
        marginBottom: height * 0.01,
    },

    listeDeroulant: {
        marginLeft: width * 0.07,
        marginTop: height * -0.020,
    },

    choix: {
        color: 'rgb(117, 115, 115)',
        marginTop: width * -0.03,
        marginLeft: width * -0.01,
    },

    iconChoix: {
        position: 'absolute',
        top: width * 0.04,
        left: width * 0.7,
    },

    listeDeroulant2: {
        marginLeft: width * 0.07,
        marginTop: height * -0.015,
    },

    inputRemplir: {
        borderBottomColor: "rgb(63, 92, 248)",
        borderBottomWidth: 2,
        paddingBottom: height * 0.01,
        marginLeft: width * -0.01,
        width: width * 0.6,
        marginBottom: height * 0.03,
    },

    iconRemplirTexte: {
        marginTop: height * 0.009,
    },

    //Pour les erreurs
    erreurTexte: {
        color: 'red',
        fontSize: 13,
        marginLeft: 0,
        marginBottom: 0,
    },

    //Pour les erreurs
    messageErreur: {
        color: 'red', fontSize: 12, marginTop: -25
    }

});

export default ajoutContactSyle;