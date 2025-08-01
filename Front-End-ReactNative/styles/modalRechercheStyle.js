//pour rendre le projet responsive
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { StyleSheet } from "react-native";

const modalRechercheStyle = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 10,
    },
    header: {
        fontSize: 22,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f1f3f6',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    iconSearch: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    resultText: {
        marginTop: 20,
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    resultHighlight: {
        fontWeight: 'bold',
        color: '#2c76ea',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        width: '100%',
    },
    okButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#27ae60',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    okButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    closeButton: {
        flex: 1,
        backgroundColor: '#c0392b',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default modalRechercheStyle;