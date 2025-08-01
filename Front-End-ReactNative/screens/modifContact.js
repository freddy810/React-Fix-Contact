// Importation groupée de composants, icônes, hooks et styles nécessaires
import { modifContactSyle, ModalAjout, SimpleLineIcons, FontAwesome, Feather, StatusBar, useState, React, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, AntDesign, MaterialCommunityIcons } from '../importation/importationModifContact';

// Hook personnalisé pour la logique de modification (liaison avec useModifContact.js)
import useModifContact from '../hook/useModifContact';

// Composant principal pour modifier un contact existant
export default function ModifContact({ retour, contact, setPage }) {

    // Contrôle de l'ouverture du modal pour sélectionner la SIM
    const [modalVisible, setModalVisible] = useState(false);
    const ouvrirModal = () => setModalVisible(true);    // Afficher le modal
    const fermerModal = () => setModalVisible(false);   // Fermer le modal

    // État initial des champs basé sur le contact reçu en paramètre
    const [enregistrementSIM, setEnregistrementSIM] = useState(contact.enregistrementSIM); // SIM
    const [nom, setNom] = useState(contact.nom); // Nom
    const [numPhone, setNumPhone] = useState(contact.numPhone); // Numéro
    const [adresseEmail, setAdresseEmail] = useState(contact.adresseEmail); // E-mail

    // Messages d’erreur récupérés du back-end après validation
    const [message, setMessage] = useState({}); // Objet avec erreurs spécifiques
    const [typeMessage, setTypeMessage] = useState(''); // Type (info, succès, erreur…)

    // Hook pour gérer la logique de modification (liaison avec useModifContact.js)
    const { modifierContact } = useModifContact({
        contactId: contact.id,
        nom,
        numPhone,
        adresseEmail,
        enregistrementSIM,
        setNom,
        setNumPhone,
        setAdresseEmail,
        setEnregistrementSIM,
        retour, // Fonction de retour vers VoirContact.js
        setMessage,
        setTypeMessage,
    });

    return (
        <View style={modifContactSyle.container}>
            {/* Menu haut avec bouton retour et bouton valider */}
            <View style={modifContactSyle.menuEnHaut}>
                <TouchableOpacity onPress={() => retour(contact)}> {/* Retour vers VoirContact.js */}
                    <Feather style={modifContactSyle.iconRetourt} name="chevron-left" color="rgb(44, 118, 234)" size={24} />
                </TouchableOpacity>
                <Text style={modifContactSyle.textCreation}>Modifier le contact</Text>
                <TouchableOpacity onPress={modifierContact}> {/* Lancer la fonction de modification */}
                    <Feather name="check" color="rgb(44, 118, 234)" size={24} />
                </TouchableOpacity>
            </View>

            {/* Icône utilisateur (image symbolique) */}
            <FontAwesome style={modifContactSyle.iconUser} name="user" color="rgb(63, 92, 248)" size={42} />

            {/* Conteneur des champs */}
            <View style={modifContactSyle.blockChamp}>

                {/* Champ pour l'enregistrement SIM avec modal */}
                <View style={modifContactSyle.lesChamps}>
                    <MaterialCommunityIcons name="sim-alert-outline" color="#000" size={24} />
                    <View style={modifContactSyle.listeDeroulant}>
                        <TouchableOpacity onPress={ouvrirModal}>
                            <Text>Enregistrement sur le co...</Text>
                            <TextInput style={modifContactSyle.choix} value={enregistrementSIM} editable={false} />
                            <Feather style={modifContactSyle.iconChoix} name="chevron-down" color="#000" size={24} />
                        </TouchableOpacity>
                        {/* Modal pour choisir entre SIM 1 / SIM 2 */}
                        <ModalAjout visible={modalVisible} onFermer={fermerModal} setValeurSIM={setEnregistrementSIM} />
                    </View>
                </View>

                {/* Champ NOM */}
                <View style={modifContactSyle.lesChamps}>
                    <Feather style={modifContactSyle.iconRemplirTexte} name="user" color="#000" size={24} />
                    <View style={modifContactSyle.listeDeroulant2}>
                        <TextInput
                            style={modifContactSyle.inputRemplir}
                            value={nom}
                            onChangeText={text => {
                                setNom(text); // Mise à jour en temps réel
                                if (message.nom) setMessage(prev => ({ ...prev, nom: undefined })); // Efface l'erreur si elle existe déjà
                            }}
                            placeholder='Nom'
                            editable={true}
                        />
                        {/* Affichage de l’erreur si elle existe */}
                        {message.nom && (
                            <Text style={modifContactSyle.messageErreur}>{message.nom[0]}</Text>
                        )}
                    </View>
                </View>

                {/* Champ NUMÉRO DE TÉLÉPHONE */}
                <View style={modifContactSyle.lesChamps}>
                    <SimpleLineIcons style={modifContactSyle.iconRemplirTexte} name="phone" color="#000" size={24} />
                    <View style={modifContactSyle.listeDeroulant2}>
                        <TextInput
                            style={modifContactSyle.inputRemplir}
                            value={numPhone}
                            onChangeText={text => {
                                setNumPhone(text); // Mise à jour
                                if (message.numPhone) setMessage(prev => ({ ...prev, numPhone: undefined })); // Efface l’erreur
                            }}
                            placeholder='Numéro principal'
                            editable={true}
                            keyboardType='phone-pad' // Clavier avec chiffres, *, #
                        />
                        {message.numPhone && (
                            <Text style={modifContactSyle.messageErreur}>{message.numPhone[0]}</Text>
                        )}
                    </View>
                </View>

                {/* Champ EMAIL */}
                <View style={modifContactSyle.lesChamps}>
                    <AntDesign style={modifContactSyle.iconRemplirTexte} name="mail" color="#000" size={24} />
                    <View style={modifContactSyle.listeDeroulant2}>
                        <TextInput
                            style={modifContactSyle.inputRemplir}
                            value={adresseEmail}
                            onChangeText={text => {
                                setAdresseEmail(text); // Mise à jour
                                if (message.adresseEmail) setMessage(prev => ({ ...prev, adresseEmail: undefined })); // Efface l’erreur
                            }}
                            placeholder='E-mail'
                            editable={true}
                            keyboardType="email-address" // Clavier adapté pour email
                        />
                        {message.adresseEmail && (
                            <Text style={modifContactSyle.messageErreur}>{message.adresseEmail[0]}</Text>
                        )}
                    </View>
                </View>
            </View>

            {/* Barre de statut (Android/iOS) */}
            <StatusBar style="auto" />
        </View>
    );
}
