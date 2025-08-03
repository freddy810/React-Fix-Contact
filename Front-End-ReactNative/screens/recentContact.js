import { StatusBar, MaterialCommunityIcons, ScrollView, Text, TouchableOpacity, View, useState, Feather, FontAwesome, AntDesign, Ionicons, pageRecent, } from '../importation/importationRecent';
import { useNavigation } from '@react-navigation/native';

export default function Recent() {
    // Gère l'affichage du titre "Contacts" selon la position du scroll
    const [affichageScroll, setAfficheScroll] = useState(false);
    const leScroll = (event) => {
        const positionScroll = event.nativeEvent.contentOffset.y;
        setAfficheScroll(positionScroll >= 5);
    }

    const navigation = useNavigation(); // Hook pour naviguer

    return (
        <View style={pageRecent.container}>

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
                    <View style={pageRecent.blockContact}>
                        <View style={pageRecent.nomEtSim}>
                            <Text style={pageRecent.nomTexte}>Alpha</Text>
                            <Text><MaterialCommunityIcons name="sim-alert-outline" color="rgb(190, 187, 181)" size={12} /><Text style={pageRecent.simTexte}> Telma</Text></Text>
                        </View>
                        <Text style={pageRecent.heureTexte}>il y a 21 h</Text>
                    </View>
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
