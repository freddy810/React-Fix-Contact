//pour rendre le projet responsive
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { StyleSheet } from "react-native";

const pageRecent = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //-------------------------------Recherche, Parametre-----------------------------------------------------
    rechercheParametre: {
        flexDirection: 'row',
        position: 'absolute',
        top: height * 0.06,
        justifyContent: 'flex-end',
        width: width * 1,
    },

    recherche: {
        marginRight: width * 0.1,
    },

    parametre: {
        marginRight: width * 0.05,
    },

    ecritureContactOnScroll: {
        fontSize: 15,
        fontWeight: '600',
        marginRight: width * 0.43,
        marginTop: width * -0.005,
    },

    //-----------------------------scroll-------------------------------------------------------------------------
    leScroll: {
        width: width * 1,
        height: height * 0.86,
        position: 'absolute',
        top: height * 0.095,
        paddingTop: height * 0,
    },

    //Ecriture contact
    contact: {
        position: 'absolute',
        width: width * 1,
        top: height * 0.003,
        justifyContent: 'flex-start',
    },

    ecritureContact: {
        fontSize: 30,
        fontWeight: '600',
        marginLeft: width * 0.05,
    },

    //mon profil
    profil: {
        position: 'absolute',
        width: width * 1,
        top: height * 0.11,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    iconeProfil: {
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        backgroundColor: 'rgb(184, 212, 252)',
        paddingTop: height * 0.01, paddingBottom: height * 0.01,
        paddingLeft: width * 0.03, paddingRight: width * 0.03,
        borderRadius: width * 1,
    },

    texteProfil: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: height * 0.011,
    },

    lettre: {
        fontSize: 10,
        marginBottom: height * 0.010,
    },

    //Les contacts
    lesContact: {
        marginLeft: width * 0.06,
        marginTop: height * 0.2,
        width: width * 1,
        height: height * 1,
    },

    leA: {
        fontSize: 12,
        marginTop: -70,
        marginBottom: 20,
    },

    blockContact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginRight: 40,
    },

    nomTexte: {
        fontSize: 22,
    },

    simTexte: {
        fontSize: 12,
        color: 'rgb(190, 187, 181)',
    },

    heureTexte: {
        color: 'rgb(236, 70, 70)',
    },

    btnContact: {
        flexDirection: 'row',
        marginLeft: width * -0.015,
    },

    profilContact: {
        marginRight: width * 0.05,
        marginBottom: height * 0.02,
        backgroundColor: 'rgb(253, 236, 192)',
        paddingTop: height * 0.01, paddingBottom: height * 0.01,
        paddingLeft: width * 0.04, paddingRight: width * 0.04,
        borderRadius: width * 1,
    },

    texteContact: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: height * 0.011,
    },

    //-----------------------------footer-------------------------------------------------------------------------
    footer: {
        width: width * 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(245, 245, 245)',
        alignItems: 'center',
        position: 'absolute', bottom: height * 0,
        paddingBottom: height * 0.07,
        paddingTop: height * 0.011,
    },

    recent: {
        alignItems: 'center',
    },

    contactFooter: {
        alignItems: 'center',
    },

    texteRecent: {
        fontSize: 12,
        marginBottom: height * -0.01,
        marginLeft: -15,
        color: 'rgb(63, 92, 248)'
    },

    texteContactFooter: {
        fontSize: 12,
        marginBottom: height * -0.003,
        marginLeft: -20,
    },

    //-----------------------------Bouton Ajout------------------------------------------------------------------------
    iconAjout: {
        backgroundColor: "rgb(44, 118, 234)",
        color: 'white',
        padding: height * 0.0175,
        borderRadius: 100,
        position: 'absolute',
        bottom: height * -0.37,
        right: width * -0.45,
    },

    //-----------------Bouton Revenir apres recherche
    btnRevenirApresRecherche: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'red',
        marginRight: 60,
        marginTop: -4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },

    texteRetourApresRecherche: {
        color: 'red',
        fontWeight: 'bold',
    },

    //---------------Texte au chargement
    texteChargement: {
        marginLeft: 20
    },

    //-------------texte pour aucun contact trouver
    texteAucunContactTrouver: {
        marginLeft: 20,
        fontStyle: 'italic',
        color: '#999'
    },

    //---------------message pour la suppression
    viewMessageSuppression: {
        position: 'absolute',
        bottom: 150,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // pour Android
    },

    texteMesaageSuppression: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }


});

export default pageRecent;