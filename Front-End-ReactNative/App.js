import { StatusBar, ScrollView, Text, TouchableOpacity, View, useState, Feather, FontAwesome, AntDesign, Ionicons, AjoutContact, VoirContact, pageContact, } from './importation/importationApp';
import React, { useEffect } from 'react';
import useContacts from './hook/useContacts'; // Hook personnalisé pour gérer les contacts
import ModalRecherche from './components/modalRecherche'; // Composant modal pour la recherche

export default function App() {
  // Message d'accueil (affiché après modification/suppression)
  const [messageAccueil, setMessageAccueil] = useState('');

  // Hook pour récupérer les contacts (depuis l'API Laravel)
  const { contacts, loading, chargerContacts } = useContacts();

  // Gère l'affichage du titre "Contacts" selon la position du scroll
  const [affichageScroll, setAfficheScroll] = useState(false);
  const leScroll = (event) => {
    const positionScroll = event.nativeEvent.contentOffset.y;
    setAfficheScroll(positionScroll >= 5);
  };

  // Gère le terme recherché dans la recherche
  const [termeRecherche, setTermeRecherche] = useState('');
  const contactsFiltres = contacts; // Liste à afficher (peut être filtrée)

  // Gère l'affichage du modal de recherche
  const [modalVisible, setModalVisible] = useState(false);

  // Gère la navigation entre les pages : accueil / ajout / voir
  const [page, setPage] = useState('accueil');

  // Si l'utilisateur est sur la page d'ajout
  if (page === 'ajout') {
    return <AjoutContact retour={() => {
      chargerContacts(); // Recharge les contacts après ajout
      setPage('accueil');
    }} setPage={setPage} />;
  }

  // Si l'utilisateur est sur la page de visualisation d'un contact
  if (typeof page === 'object' && page.nom === 'voir') {
    return (
      <VoirContact
        contact={page.data} // Donnée du contact sélectionné
        message={page.message} // Message à afficher à l'accueil après modification
        retour={(contact, msg) => {
          setMessageAccueil(msg); // Liaison avec VoirContact.js pour message suppression/modification
          chargerContacts(); // Recharge les contacts après modification
          setPage('accueil'); // Retour à l'accueil
          setTimeout(() => setMessageAccueil(''), 3000); // Efface le message après 3s
        }}
      />
    );
  }

  return (
    <View style={pageContact.container}>

      {/* Section Recherche et Paramètre */}
      <View style={pageContact.rechercheParametre}>
        {affichageScroll && <Text style={pageContact.ecritureContactOnScroll}>Contacts</Text>}

        {/* Bouton Retour après recherche */}
        {termeRecherche !== '' && (
          <TouchableOpacity
            onPress={() => { setTermeRecherche(''); chargerContacts(); }}
            style={pageContact.btnRevenirApresRecherche}
          >
            <Text style={pageContact.texteRetourApresRecherche}>
              <Ionicons name="arrow-back" size={10} color="red" style={{ marginRight: 5 }} /> Retour
            </Text>
          </TouchableOpacity>
        )}

        {/* Bouton de recherche */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Feather style={pageContact.recherche} name="search" color="rgb(44, 118, 234)" size={24} />
        </TouchableOpacity>

        {/* Modal de recherche */}
        <ModalRecherche
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onValider={(valeurRecherchee) => {
            setTermeRecherche(valeurRecherchee); // Définit le filtre
            chargerContacts(valeurRecherchee); // Charge les contacts filtrés
            setModalVisible(false); // Ferme le modal
          }}
        />

        {/* Bouton de paramètre (non fonctionnel pour l'instant) */}
        <TouchableOpacity>
          <Feather style={pageContact.parametre} name="settings" color="rgb(44, 118, 234)" size={24} />
        </TouchableOpacity>
      </View>

      {/* Liste des contacts */}
      <ScrollView style={pageContact.leScroll} onScroll={leScroll}>

        {/* Titre "Contacts" si pas de scroll */}
        {!affichageScroll && (
          <View style={pageContact.contact}>
            <Text style={pageContact.ecritureContact}>Contacts</Text>
          </View>
        )}

        {/* Section Mon profil */}
        <View style={pageContact.profil}>
          <TouchableOpacity>
            <FontAwesome style={pageContact.iconeProfil} name="user" color="rgb(63, 92, 248)" size={24} />
          </TouchableOpacity>
          <Text style={pageContact.texteProfil}>Mon profil</Text>
        </View>

        {/* Bloc d'affichage des contacts */}
        <View style={pageContact.lesContact}>
          <Text style={pageContact.leA}>Les Contacts</Text>
          <View style={pageContact.blockContact}>

            {/* Affichage selon état du chargement */}
            {loading ? (
              <Text style={pageContact.texteChargement}>Chargement...</Text>
            ) :
              contactsFiltres.length === 0 ? (
                <Text style={pageContact.texteAucunContactTrouver}>Aucun contact trouvé</Text>
              ) : (
                contactsFiltres.map((contact, index) => (
                  <TouchableOpacity
                    key={index}
                    style={pageContact.btnContact}
                    onPress={() => setPage({ nom: 'voir', data: contact })}
                  >
                    <Text style={pageContact.profilContact}>
                      {contact.nom.charAt(0).toUpperCase()}
                    </Text>
                    <Text style={pageContact.texteContact}>{contact.nom}</Text>
                  </TouchableOpacity>
                ))
              )}

          </View>
        </View>
      </ScrollView>

      {/* Footer avec navigation (statique) */}
      <View style={pageContact.footer}>
        <View style={pageContact.recent}>
          <TouchableOpacity>
            <AntDesign style={pageContact.iconRecent} name="clockcircleo" color="#000" size={20} />
          </TouchableOpacity>
          <Text style={pageContact.texteRecent}>Récents</Text>
        </View>

        <View style={pageContact.contactFooter}>
          <TouchableOpacity>
            <FontAwesome name="user" color="rgb(63, 92, 248)" size={24} />
          </TouchableOpacity>
          <Text style={pageContact.texteContactFooter}>Contacts</Text>
        </View>
      </View>

      {/* Bouton pour aller à la page d'ajout */}
      <TouchableOpacity onPress={() => setPage('ajout')}>
        <Ionicons style={pageContact.iconAjout} name="add" color="#000" size={24} />
      </TouchableOpacity>

      {/* Message après suppression/modification */}
      {messageAccueil !== '' && (
        <View style={pageContact.viewMessageSuppression}>
          <Text style={pageContact.texteMesaageSuppression}>{messageAccueil}</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
