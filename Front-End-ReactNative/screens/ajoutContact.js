// Importation groupée depuis un fichier intermédiaire pour alléger ce fichier
import { ajoutContactSyle, ModalAjout, StatusBar, useState, React, Text, TextInput, TouchableOpacity, View, Feather, FontAwesome, AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '../importation/importationAjoutContact';

import useAjoutContact from '../hook/useAjoutContact'; // Hook personnalisé pour gérer l’ajout du contact (envoi au back-end Laravel)

export default function AjoutContact({ retour, setPage }) { // Composant principal, props : retour (navigation arrière), setPage (changement d’écran)

    // Gère l’affichage de la modal de sélection de SIM
    const [modalVisible, setModalVisible] = useState(false);
    const ouvrirModal = () => setModalVisible(true);   // Afficher la modal
    const fermerModal = () => setModalVisible(false);  // Cacher la modal

    // Champs du formulaire
    const [enregistrementSIM, setEnregistrementSIM] = useState('telma'); // SIM par défaut
    const [nom, setNom] = useState('');                                   // Champ nom
    const [numPhone, setNumPhone] = useState('');                         // Champ numéro
    const [adresseEmail, setAdresseEmail] = useState('');                // Champ email

    // Messages d’erreur sous les champs (liaison avec useAjoutContact)
    const [message, setMessage] = useState({});           // Objet contenant les erreurs par champ
    const [typeMessage, setTypeMessage] = useState('');   // Pour type d’erreur global éventuel

    // Récupère la fonction d’ajout du hook personnalisé
    const { ajouterContact } = useAjoutContact({
        nom,
        numPhone,
        adresseEmail,
        enregistrementSIM,
        setNom,
        setNumPhone,
        setAdresseEmail,
        setEnregistrementSIM,
        retour,        // Sert à revenir à la page précédente après ajout
        setPage,       // Pour basculer à la page des contacts après ajout
        setMessage,    // Pour afficher les erreurs de validation sous les champs
        setTypeMessage // Pour des messages globaux éventuellement
    });

    return (
        <View style={ajoutContactSyle.container}>

            {/* ----- Haut de l'écran : barre de navigation ----- */}
            <View style={ajoutContactSyle.menuEnHaut}>
                <TouchableOpacity onPress={retour}>
                    <Feather style={ajoutContactSyle.iconRetourt} name="chevron-left" color="rgb(44, 118, 234)" size={24} />
                </TouchableOpacity>
                <Text style={ajoutContactSyle.textCreation}>Créer un nouveau contact</Text>
                <TouchableOpacity onPress={ajouterContact}>
                    <Feather name="check" color="rgb(44, 118, 234)" size={24} />
                </TouchableOpacity>
            </View>

            {/* ----- Icone user ----- */}
            <FontAwesome style={ajoutContactSyle.iconUser} name="user" color="rgb(63, 92, 248)" size={42} />

            {/* ----- Bloc contenant tous les champs ----- */}
            <View style={ajoutContactSyle.blockChamp}>

                {/* ----- Sélection de la carte SIM ----- */}
                <View style={ajoutContactSyle.lesChamps}>
                    <MaterialCommunityIcons name="sim-alert-outline" color="#000" size={24} />
                    <View style={ajoutContactSyle.listeDeroulant}>
                        <TouchableOpacity onPress={ouvrirModal}>
                            <Text>Enregistrement sur le co...</Text>
                            <TextInput
                                style={ajoutContactSyle.choix}
                                value={enregistrementSIM}
                                editable={false} // Non modifiable directement
                            />
                            <Feather style={ajoutContactSyle.iconChoix} name="chevron-down" color="#000" size={24} />
                        </TouchableOpacity>
                        <ModalAjout
                            visible={modalVisible}
                            onFermer={fermerModal}
                            setValeurSIM={setEnregistrementSIM}
                        />
                    </View>
                </View>

                {/* ----- Champ Nom ----- */}
                <View style={ajoutContactSyle.lesChamps}>
                    <Feather style={ajoutContactSyle.iconRemplirTexte} name="user" color="#000" size={24} />
                    <View style={ajoutContactSyle.listeDeroulant2}>
                        <TextInput
                            style={ajoutContactSyle.inputRemplir}
                            value={nom}
                            onChangeText={text => {
                                setNom(text);
                                if (message.nom) {
                                    setMessage(prev => ({ ...prev, nom: undefined }));
                                }
                            }}
                            placeholder="Nom"
                            placeholderTextColor="gray"
                        />
                        {message.nom && (
                            <Text style={ajoutContactSyle.messageErreur}>{message.nom[0]}</Text>
                        )}
                    </View>
                </View>

                {/* ----- Champ Numéro ----- */}
                <View style={ajoutContactSyle.lesChamps}>
                    <SimpleLineIcons style={ajoutContactSyle.iconRemplirTexte} name="phone" color="#000" size={24} />
                    <View style={ajoutContactSyle.listeDeroulant2}>
                        <TextInput
                            style={ajoutContactSyle.inputRemplir}
                            value={numPhone}
                            onChangeText={text => {
                                setNumPhone(text);
                                if (message.numPhone) {
                                    setMessage(prev => ({ ...prev, numPhone: undefined }));
                                }
                            }}
                            placeholder="Numéro principal"
                            placeholderTextColor="gray"
                            keyboardType='phone-pad' // Affiche le clavier téléphonique
                        />
                        {message.numPhone && (
                            <Text style={ajoutContactSyle.messageErreur}>{message.numPhone[0]}</Text>
                        )}
                    </View>
                </View>

                {/* ----- Champ Email ----- */}
                <View style={ajoutContactSyle.lesChamps}>
                    <AntDesign style={ajoutContactSyle.iconRemplirTexte} name="mail" color="#000" size={24} />
                    <View style={ajoutContactSyle.listeDeroulant2}>
                        <TextInput
                            style={ajoutContactSyle.inputRemplir}
                            value={adresseEmail}
                            onChangeText={text => {
                                setAdresseEmail(text);
                                if (message.adresseEmail) {
                                    setMessage(prev => ({ ...prev, adresseEmail: undefined }));
                                }
                            }}
                            placeholder="E-mail"
                            placeholderTextColor="gray"
                            keyboardType="email-address"
                        />
                        {message.adresseEmail && (
                            <Text style={ajoutContactSyle.messageErreur}>{message.adresseEmail[0]}</Text>
                        )}
                    </View>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
