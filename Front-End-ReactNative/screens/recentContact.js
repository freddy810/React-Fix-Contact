import { StatusBar, Modal, MaterialCommunityIcons, ScrollView, Text, TouchableOpacity, View, useState, Feather, FontAwesome, AntDesign, Ionicons, pageRecent, } from '../importation/importationRecent';
import { useNavigation } from '@react-navigation/native';
import useContacts_recents from '../hook/useRecentContact';
import useSupprimerRecentContact from '../hook/useRecentSupprContact';

//Pour le type 'il y a 7h'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';
// Initialisation
dayjs.extend(relativeTime);
dayjs.locale('fr'); // langue française

export default function Recent() {
    //Pour la suppression
    const [contactASupprimer, setContactASupprimer] = useState(null);
    const { supprimerRecentContact } = useSupprimerRecentContact();

    // Hook pour récupérer les contacts (depuis l'API Laravel)
    const { contacts_recents, loading, chargerContacts_recents } = useContacts_recents();

    const contactsFiltres = contacts_recents; // Liste à afficher (peut être filtrée)

    //Pour le modal
    const [modalVisible, setModalVisible] = useState(false); // <- pour afficher le modal
    const supprimerContact = async () => {
        if (contactASupprimer) {
            await supprimerRecentContact(contactASupprimer); // Suppression via API
            setModalVisible(false); // Ferme le modal
            setContactASupprimer(null); // Reset
            chargerContacts_recents(); // Recharge les contacts
            Alert.alert("Suppression", "Le contact a bien été supprimé.");
        }
    };
    // Gère l'affichage du titre "Contacts" selon la position du scroll
    const [affichageScroll, setAfficheScroll] = useState(false);
    const leScroll = (event) => {
        const positionScroll = event.nativeEvent.contentOffset.y;
        setAfficheScroll(positionScroll >= 5);
    };

    const navigation = useNavigation(); // Hook pour naviguer

    return (
        <View style={pageRecent.container}>

            {/* Modal de suppression */}
            <Modal transparent={true} visible={modalVisible} animationType="fade" onRequestClose={() => setModalVisible(false)}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>

                        <Text style={{ fontSize: 18, marginBottom: 10 }}>Voulez-vous vraiment supprimer cette affichage ?</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginRight: 15 }}>
                                <Text style={{ color: 'blue' }}>Annuler</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={supprimerContact}>
                                <Text style={{ color: 'red' }}>Supprimer</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>

            {/* Section Recherche et Paramètre */}
            <View style={pageRecent.rechercheParametre}>
                {affichageScroll && <Text style={pageRecent.ecritureContactOnScroll}>Récents</Text>}


                {/* Bouton de recherche */}
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Ionicons style={pageRecent.recherche} name="notifications-sharp" color="rgb(44, 118, 234)" size={24} />
                </TouchableOpacity>

                {/* Bouton de paramètre (non fonctionnel pour l'instant) */}
                <TouchableOpacity>
                    <Feather style={pageRecent.parametre} name="settings" color="rgb(44, 118, 234)" size={24} />
                </TouchableOpacity>
            </View>

            {/* Liste des contacts */}
            <ScrollView style={pageRecent.leScroll} onScroll={leScroll}>

                {/* Titre "Contacts" si pas de scroll */}
                {!affichageScroll && (
                    <View style={pageRecent.contact}>
                        <Text style={pageRecent.ecritureContact}>Récents</Text>
                    </View>
                )}

                {/* Bloc d'affichage des contacts */}
                <View style={pageRecent.lesContact}>
                    <Text style={pageRecent.leA}>Les Contacts Récemement vues</Text>


                    {/* Affichage selon état du chargement */}
                    {loading ? (
                        <Text style={pageRecent.texteChargement}>Chargement...</Text>
                    ) :
                        (
                            contactsFiltres.map((contact_recent, index) => (
                                <TouchableOpacity key={index} onPress={() => {
                                    setContactASupprimer(contact_recent.id); // <-- on enregistre l'ID du contact sélectionné
                                    setModalVisible(true); // <-- on affiche le modal
                                }}>
                                    <View style={pageRecent.blockContact} >
                                        <View style={pageRecent.nomEtSim}>
                                            <Text style={pageRecent.nomTexte}>{contact_recent.nom}</Text>
                                            <Text><MaterialCommunityIcons name="sim-alert-outline" color="rgb(190, 187, 181)" size={12} /><Text style={pageRecent.simTexte}> {contact_recent.enregistrementSIM}</Text></Text>
                                        </View>
                                        <Text style={pageRecent.heureTexte}>{contact_recent.momentVoir}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        )}

                </View>
            </ScrollView>

            {/* Footer avec navigation (statique) */}
            <View style={pageRecent.footer}>
                <View style={pageRecent.recent}>
                    <TouchableOpacity onPress={() => navigation.navigate('Recent')}>
                        <AntDesign style={pageRecent.iconRecent} name="clockcircleo" color="rgb(63, 92, 248)" size={20} />
                        <Text style={pageRecent.texteRecent}>Récents</Text>
                    </TouchableOpacity>
                </View>

                <View style={pageRecent.contactFooter}>
                    <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
                        <FontAwesome name="user" color="#000" size={24} />
                        <Text style={pageRecent.texteContactFooter}>Contacts</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
