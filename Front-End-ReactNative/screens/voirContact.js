// Import de useEffect (effets secondaires) et useState (états locaux)
import { useEffect } from 'react';
// Importation groupée depuis un fichier de centralisation (composants, icônes, styles, etc.)
import { useState, ModifContact, voirContactSyle, AntDesign, SimpleLineIcons, FontAwesome, StyleSheet, Text, TouchableOpacity, View, StatusBar, Feather, MaterialIcons, MaterialCommunityIcons } from '../importation/importationVoirContact';
// Pour afficher une boîte de confirmation (alert)
import { Alert } from 'react-native';
// Hook personnalisé pour la suppression d’un contact
import useSupprimerContact from '../hook/useSupprContact';

// Déclaration du composant VoirContact avec 3 props : contactInitial (objet), retour (fonction), message (texte)
export default function VoirContact({ contact: contactInitial, retour, message }) {

    // page : gère l'état entre "voir" et "modif"
    const [page, setPage] = useState('voir');
    // contact : contient les données du contact affiché
    const [contact, setContact] = useState(contactInitial);

    // showMessage : message de succès affiché pendant quelques secondes
    const [showMessage, setShowMessage] = useState(message);

    // Effet qui cache automatiquement le message après 3 secondes
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setShowMessage(''), 3000); // Efface après 3 secondes
            return () => clearTimeout(timer); // Nettoyage du timer si le composant est démonté
        }
    }, [message]);

    // Récupération de la fonction supprimerContact depuis le hook, avec retour comme callback
    const { supprimerContact } = useSupprimerContact({ retour });

    // Si on est en mode modification, on retourne le composant ModifContact à la place
    if (typeof page === 'object' && page.nom === 'modif') {
        return <ModifContact
            contact={contact}
            message={page.message}
            retour={(nouveauContact, msg) => {
                setContact(nouveauContact); // Met à jour les infos après modif
                setPage('voir');            // Reviens à la vue normale
                setShowMessage(msg);        // Affiche message de succès
            }}
        />;
    }

    // Sinon, affichage normal de la fiche contact
    return (
        <View style={voirContactSyle.container}>

            {/* Bloc 1 : En-tête, retour, modifier, supprimer */}
            <View style={voirContactSyle.bloc1}>
                <View style={voirContactSyle.troisMenuHautVoir}>
                    {/* Bouton retour vers la page précédente */}
                    <TouchableOpacity onPress={retour}>
                        <Feather name="chevron-left" size={28} color="rgb(44, 118, 234)" />
                    </TouchableOpacity>
                    {/* Boutons modifier et supprimer */}
                    <View style={voirContactSyle.modifEtSuppr}>
                        {/* Aller en mode modification */}
                        <TouchableOpacity onPress={() => setPage({ nom: 'modif', data: contact })}>
                            <MaterialIcons style={{ marginRight: 20 }} name="mode-edit-outline" size={26} color="rgb(44, 118, 234)" />
                        </TouchableOpacity>
                        {/* Suppression avec confirmation */}
                        <TouchableOpacity onPress={() => {
                            Alert.alert(
                                "Confirmation", // Titre
                                "Voulez-vous vraiment supprimer ce contact ?", // Message
                                [
                                    { text: "Annuler", style: "cancel" }, // Annulation
                                    {
                                        text: "Supprimer", // Si confirmé
                                        style: "destructive",
                                        onPress: () => supprimerContact(contact.id), // Appel du hook
                                    },
                                ],
                                { cancelable: true }
                            );
                        }}>
                            <MaterialCommunityIcons name="delete" size={26} color="rgb(44, 118, 234)" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Icône utilisateur */}
                <View style={voirContactSyle.iconUserVoir}>
                    <FontAwesome name="user" color="rgb(142, 189, 243)" size={42} />
                </View>
                {/* Nom du contact */}
                <Text style={voirContactSyle.nomContact}>{contact.nom}</Text>
                {/* QR code fictif */}
                <Text style={voirContactSyle.leQRCode}>
                    <FontAwesome name="qrcode" size={20} color="rgb(44, 118, 234)" />
                </Text>
            </View>

            {/* Bloc 2 : Numéro de téléphone et SIM */}
            <View style={voirContactSyle.bloc2}>
                {/* Icône téléphone */}
                <SimpleLineIcons name="phone" color="rgb(44, 118, 234)" size={20} />
                {/* Numéro et enregistrement SIM */}
                <View style={voirContactSyle.numeroEtSim}>
                    <Text style={voirContactSyle.numeroPhone}>{contact.numPhone}</Text>
                    <Text style={voirContactSyle.simPhone}>{contact.enregistrementSIM}</Text>
                </View>
                {/* Icône message */}
                <AntDesign name="message1" color="rgb(44, 118, 234)" size={20} />
            </View>

            {/* Bloc 3 : Vidéo */}
            <View style={voirContactSyle.bloc3}>
                <AntDesign name="videocamera" color="rgb(44, 118, 234)" size={20} />
                <View style={voirContactSyle.numeroEtSim2}>
                    <Text style={voirContactSyle.numeroPhone2}>{contact.numPhone}</Text>
                </View>
            </View>

            {/* Message de succès visible si showMessage n'est pas vide */}
            {showMessage !== '' && (
                <Text style={voirContactSyle.messageSucces}>
                    {showMessage}
                </Text>
            )}

            {/* Barre de statut (haut de l’écran) */}
            <StatusBar style="auto" />
        </View>
    );
}
