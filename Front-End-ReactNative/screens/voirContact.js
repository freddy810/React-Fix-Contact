import { useEffect } from 'react';
import { useState, ModifContact, voirContactSyle, AntDesign, SimpleLineIcons, FontAwesome, StyleSheet, Text, TouchableOpacity, View, StatusBar, Feather, MaterialIcons, MaterialCommunityIcons } from '../importation/importationVoirContact';
import { Alert } from 'react-native';
import useSupprimerContact from '../hook/useSupprContact';

export default function VoirContact({ contact: contactInitial, retour, message }) {

    const [page, setPage] = useState('voir');
    const [contact, setContact] = useState(contactInitial);

    const [showMessage, setShowMessage] = useState(message);
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setShowMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const { supprimerContact } = useSupprimerContact({ retour });

    if (typeof page === 'object' && page.nom === 'modif') {
        return <ModifContact contact={contact} message={page.message} retour={(nouveauContact, msg) => {
            setContact(nouveauContact);
            setPage('voir');
            setShowMessage(msg);
        }} />;
    }

    return (
        <View style={voirContactSyle.container}>
            {/* Bloc 1 */}
            <View style={voirContactSyle.bloc1}>
                <View style={voirContactSyle.troisMenuHautVoir}>
                    <TouchableOpacity onPress={retour}>
                        <Feather name="chevron-left" size={28} color="rgb(44, 118, 234)" />
                    </TouchableOpacity>
                    <View style={voirContactSyle.modifEtSuppr}>
                        <TouchableOpacity onPress={() => setPage({ nom: 'modif', data: contact })}>
                            <MaterialIcons style={{ marginRight: 20 }} name="mode-edit-outline" size={26} color="rgb(44, 118, 234)" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Alert.alert(
                                "Confirmation",
                                "Voulez-vous vraiment supprimer ce contact ?",
                                [
                                    { text: "Annuler", style: "cancel" },
                                    {
                                        text: "Supprimer",
                                        style: "destructive",
                                        onPress: () => supprimerContact(contact.id),
                                    },
                                ],
                                { cancelable: true }
                            );
                        }}>

                            <MaterialCommunityIcons name="delete" size={26} color="rgb(44, 118, 234)" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={voirContactSyle.iconUserVoir}>
                    <FontAwesome name="user" color="rgb(142, 189, 243)" size={42} />
                </View>
                <Text style={voirContactSyle.nomContact}>{contact.nom}</Text>
                <Text style={voirContactSyle.leQRCode}>
                    <FontAwesome name="qrcode" size={20} color="rgb(44, 118, 234)" />
                </Text>
            </View>

            {/* Bloc 2 */}
            <View style={voirContactSyle.bloc2}>
                <SimpleLineIcons name="phone" color="rgb(44, 118, 234)" size={20} />
                <View style={voirContactSyle.numeroEtSim}>
                    <Text style={voirContactSyle.numeroPhone}>{contact.numPhone}</Text>
                    <Text style={voirContactSyle.simPhone}>{contact.enregistrementSIM}</Text>
                </View>
                <AntDesign name="message1" color="rgb(44, 118, 234)" size={20} />
            </View>

            {/* Bloc 3 */}
            <View style={voirContactSyle.bloc3}>
                <AntDesign name="videocamera" color="rgb(44, 118, 234)" size={20} />
                <View style={voirContactSyle.numeroEtSim2}>
                    <Text style={voirContactSyle.numeroPhone2}>{contact.numPhone}</Text>
                </View>
            </View>

            {showMessage !== '' && (
                <Text style={voirContactSyle.messageSucces}>
                    {showMessage}
                </Text>
            )}

            <StatusBar style="auto" />
        </View>
    );
}
