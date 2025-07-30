//pour rendre le projet responsive
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { StyleSheet } from "react-native";

const modalAjoutStyle = StyleSheet.create({
    conteneurModal: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    conteneurModal2: {
        backgroundColor: 'hsl(0, 0.00%, 95.70%)', padding: 20, borderRadius: 20,
        width: width * 0.85,
        position: 'absolute',
        top: width * 0.7,
    },

    champs1: {
        flexDirection: 'row',
    },

    iconChamps1: {
        marginTop: height * 0.023,
        marginRight: width * 0.05,
        marginBottom: height * 0.030,
    },

    texteSim: {
        color: 'rgb(117, 115, 115)',
    },

    champs2: {
        flexDirection: 'row',
    },

    iconChamps2: {
        marginTop: height * 0.023,
        marginRight: width * 0.05,
        marginBottom: height * 0.030,
    },

    texteSim2: {
        color: 'rgb(117, 115, 115)',
    },
});

export default modalAjoutStyle;