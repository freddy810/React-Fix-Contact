import { ajoutContactSyle, ModalAjout, StatusBar, useState, React, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, AntDesign, MaterialCommunityIcons, Feather, FontAwesome, SimpleLineIcons } from '../importation/importationAjoutContact'

import useAjoutContact from '../hook/useAjoutContact';

export default function AjoutContact({ retour, setPage }) {
    //Pour le modal
    const [modalVisible, setModalVisible] = useState(false);
    const ouvrirModal = () => setModalVisible(true);
    const fermerModal = () => setModalVisible(false);
    const [enregistrementSIM, setEnregistrementSIM] = useState('telma');
    const [nom, setNom] = useState('');
    const [numPhone, setNumPhone] = useState('');
    const [adresseEmail, setAdresseEmail] = useState('');

    // Nouveaux états pour message utilisateur
    const [message, setMessage] = useState('');
    const [typeMessage, setTypeMessage] = useState(''); // 'success' ou 'error'

    // le composant qui permet de faire un ajout
    const { ajouterContact } = useAjoutContact({
        nom, numPhone, adresseEmail, enregistrementSIM, setNom, setNumPhone, setAdresseEmail, setEnregistrementSIM,
        retour, setPage, setMessage, setTypeMessage,
    });

    return (
        <View style={ajoutContactSyle.container}>
            {/* ----------------Menu en haut------------------------------------------------------ */}
            <View style={ajoutContactSyle.menuEnHaut}>
                <TouchableOpacity onPress={retour}><Feather style={ajoutContactSyle.iconRetourt} name="chevron-left" color="rgb(44, 118, 234)" size={24} /></TouchableOpacity>
                <Text style={ajoutContactSyle.textCreation}>Créer un nouveau contact</Text>
                <TouchableOpacity onPress={ajouterContact}><Feather name="check" color="rgb(44, 118, 234)" size={24} /></TouchableOpacity>
            </View>

            {/* ----------------icon user------------------------------------------------------ */}
            <FontAwesome style={ajoutContactSyle.iconUser} name="user" color="rgb(63, 92, 248)" size={42} />

            {/* ----------------Les champs à fournir------------------------------------------------------ */}
            <View style={ajoutContactSyle.blockChamp}>
                <View style={ajoutContactSyle.lesChamps}>
                    <MaterialCommunityIcons name="sim-alert-outline" color="#000" size={24} />
                    <View style={ajoutContactSyle.listeDeroulant}>
                        <TouchableOpacity onPress={ouvrirModal}>
                            <Text>Enregistrement sur le co...</Text>
                            <TextInput style={ajoutContactSyle.choix} value={enregistrementSIM} editable={false} />
                            <Feather style={ajoutContactSyle.iconChoix} name="chevron-down" color="#000" size={24} />
                        </TouchableOpacity>

                        {/*-----Le Modal----- */}
                        <ModalAjout visible={modalVisible} onFermer={fermerModal} setValeurSIM={setEnregistrementSIM} />

                    </View>
                </View>

                <View style={ajoutContactSyle.lesChamps}>
                    <Feather style={ajoutContactSyle.iconRemplirTexte} name="user" color="#000" size={24} />
                    <View style={ajoutContactSyle.listeDeroulant2}>
                        <TextInput style={ajoutContactSyle.inputRemplir} value={nom} onChangeText={setNom} placeholder='Nom' editable={true} />
                    </View>
                </View>

                <View style={ajoutContactSyle.lesChamps}>
                    <SimpleLineIcons style={ajoutContactSyle.iconRemplirTexte} name="phone" color="#000" size={24} />
                    <View style={ajoutContactSyle.listeDeroulant2}>
                        <TextInput style={ajoutContactSyle.inputRemplir} value={numPhone} onChangeText={setNumPhone} placeholder='Numéro principal' editable={true} />
                    </View>
                </View>

                <View style={ajoutContactSyle.lesChamps}>
                    <AntDesign style={ajoutContactSyle.iconRemplirTexte} name="mail" color="#000" size={24} />
                    <View style={ajoutContactSyle.listeDeroulant2}>
                        <TextInput style={ajoutContactSyle.inputRemplir} value={adresseEmail} onChangeText={setAdresseEmail} placeholder='E-mail' editable={true} />
                    </View>
                </View>

                {/* Affichage message utilisateur */}
                {message !== '' && (
                    <Text style={{
                        color: 'red',
                        textAlign: 'center',
                        marginVertical: 30,
                        fontWeight: 'bold',
                        position: 'absolute', top: -180, left: 35
                    }}>
                        {message}
                    </Text>
                )}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

