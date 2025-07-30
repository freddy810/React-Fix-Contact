import { modifContactSyle, ModalAjout, SimpleLineIcons, FontAwesome, Feather, StatusBar, useState, React, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, AntDesign, MaterialCommunityIcons, } from '../importation/importationModifContact';

import useModifContact from '../hook/useModifContact';

export default function ModifContact({ retour, contact, setPage }) {

    //Pour le modal
    const [modalVisible, setModalVisible] = useState(false);
    const ouvrirModal = () => setModalVisible(true);
    const fermerModal = () => setModalVisible(false);
    const [enregistrementSIM, setEnregistrementSIM] = useState(contact.enregistrementSIM);
    const [nom, setNom] = useState(contact.nom);
    const [numPhone, setNumPhone] = useState(contact.numPhone);
    const [adresseEmail, setAdresseEmail] = useState(contact.adresseEmail);

    // Nouveaux états pour message utilisateur
    const [message, setMessage] = useState('');
    const [typeMessage, setTypeMessage] = useState(''); // 'success' ou 'error'

    // le composant qui permet de faire un ajout
    const { modifierContact } = useModifContact({
        contactId: contact.id, nom, numPhone, adresseEmail, enregistrementSIM, setNom, setNumPhone, setAdresseEmail, setEnregistrementSIM,
        retour, setMessage, setTypeMessage,
    });

    return (
        <View style={modifContactSyle.container}>
            {/* ----------------Menu en haut------------------------------------------------------ */}
            <View style={modifContactSyle.menuEnHaut}>
                <TouchableOpacity onPress={() => retour(contact)}><Feather style={modifContactSyle.iconRetourt} name="chevron-left" color="rgb(44, 118, 234)" size={24} /></TouchableOpacity>
                <Text style={modifContactSyle.textCreation}>Modifier le contact</Text>
                <TouchableOpacity onPress={modifierContact}><Feather name="check" color="rgb(44, 118, 234)" size={24} /></TouchableOpacity>
            </View>

            {/* ----------------icon user------------------------------------------------------ */}
            <FontAwesome style={modifContactSyle.iconUser} name="user" color="rgb(63, 92, 248)" size={42} />

            {/* ----------------Les champs à fournir------------------------------------------------------ */}
            <View style={modifContactSyle.blockChamp}>
                <View style={modifContactSyle.lesChamps}>
                    <MaterialCommunityIcons name="sim-alert-outline" color="#000" size={24} />
                    <View style={modifContactSyle.listeDeroulant}>
                        <TouchableOpacity onPress={ouvrirModal}>
                            <Text>Enregistrement sur le co...</Text>
                            <TextInput style={modifContactSyle.choix} value={enregistrementSIM} editable={false} />
                            <Feather style={modifContactSyle.iconChoix} name="chevron-down" color="#000" size={24} />
                        </TouchableOpacity>

                        {/*-----Le Modal----- */}
                        <ModalAjout visible={modalVisible} onFermer={fermerModal} setValeurSIM={setEnregistrementSIM} />
                    </View>
                </View>

                <View style={modifContactSyle.lesChamps}>
                    <Feather style={modifContactSyle.iconRemplirTexte} name="user" color="#000" size={24} />
                    <View style={modifContactSyle.listeDeroulant2}>
                        <TextInput style={modifContactSyle.inputRemplir} value={nom} onChangeText={setNom} placeholder='Nom' editable={true} />
                    </View>
                </View>

                <View style={modifContactSyle.lesChamps}>
                    <SimpleLineIcons style={modifContactSyle.iconRemplirTexte} name="phone" color="#000" size={24} />
                    <View style={modifContactSyle.listeDeroulant2}>
                        <TextInput style={modifContactSyle.inputRemplir} value={numPhone} onChangeText={setNumPhone} placeholder='Numéro principal' editable={true} />
                    </View>
                </View>

                <View style={modifContactSyle.lesChamps}>
                    <AntDesign style={modifContactSyle.iconRemplirTexte} name="mail" color="#000" size={24} />
                    <View style={modifContactSyle.listeDeroulant2}>
                        <TextInput style={modifContactSyle.inputRemplir} value={adresseEmail} onChangeText={setAdresseEmail} placeholder='E-mail' editable={true} />
                    </View>
                </View>

                {/* Affichage message utilisateur */}
                {message !== '' && (
                    <Text style={{
                        color: 'red',
                        textAlign: 'center',
                        marginVertical: 30,
                        fontWeight: 'bold',
                        position: 'absolute', top: -180, left: 5
                    }}>
                        {message}
                    </Text>
                )}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
