import { StatusBar, ScrollView, Text, TouchableOpacity, View, useState, Feather, FontAwesome, AntDesign, Ionicons, AjoutContact, VoirContact, pageContact, } from './importation/importationApp';
import useContacts from './hook/useContacts';

export default function App() {
  //Pour la suppression
  const [messageAccueil, setMessageAccueil] = useState('');

  //pour le hook (api)
  const { contacts, loading, chargerContacts } = useContacts(); // <-- ici on récupère les données du hook

  //Pour le scrollView
  const [affichageScroll, setAfficheScroll] = useState(false);
  const leScroll = (event) => {
    const positionScroll = event.nativeEvent.contentOffset.y;
    if (positionScroll >= 5) {
      setAfficheScroll(true);
    } else {
      setAfficheScroll(false);
    }
  };

  //Pour la navigation
  const [page, setPage] = useState('accueil');
  if (page === 'ajout') {
    return <AjoutContact retour={() => {
      chargerContacts(); // ← recharge les contacts après ajout
      setPage('accueil');
    }} setPage={setPage} />;
  }

  // Si page est un objet avec nom 'voir'
  if (typeof page === 'object' && page.nom === 'voir') {
    return (<VoirContact contact={page.data} message={page.message}
      retour={(contact, msg) => {
        setMessageAccueil(msg);//affiche le message à l'accueil
        chargerContacts(); // ← recharge les contacts après modification ou suppression
        setPage('accueil');
        setTimeout(() => setMessageAccueil(''), 3000);
      }}
    />
    );
  }

  return (
    <View style={pageContact.container}>

      {/*----------Recherche, Parametre------------------------------------------------------------------------------------------------------ */}
      <View style={pageContact.rechercheParametre}>
        {affichageScroll == true && <Text style={pageContact.ecritureContactOnScroll}>Contacts</Text>}
        <TouchableOpacity ><Feather style={pageContact.recherche} name="search" color="rgb(44, 118, 234)" size={24} /></TouchableOpacity>
        <TouchableOpacity><Feather style={pageContact.parametre} name="settings" color="rgb(44, 118, 234)" size={24} /></TouchableOpacity>
      </View>

      {/*----------ScrollView------------------------------------------------------------------------------------------------------ */}
      <ScrollView style={pageContact.leScroll} onScroll={leScroll}>
        {/*----------Ecriture contact-----------*/}
        {affichageScroll == false &&
          <View style={pageContact.contact}>
            <Text style={pageContact.ecritureContact}>Contacts</Text>
          </View>
        }

        {/*----------Mon profil-----------*/}
        <View style={pageContact.profil}>
          <TouchableOpacity><FontAwesome style={pageContact.iconeProfil} name="user" color="rgb(63, 92, 248)" size={24} /></TouchableOpacity>
          <Text style={pageContact.texteProfil}>Mon profil</Text>
        </View>

        {/*----------les Contact-----------*/}
        <View style={pageContact.lesContact}>
          <Text style={pageContact.leA}>Les Contacts</Text>

          <View style={pageContact.blockContact}>

            {/* 
              Affichage conditionnel :
              - Si les contacts sont en train de charger, on affiche un message de chargement
              - Sinon, on affiche la liste des contacts récupérés depuis Laravel
            */}
            {loading ? (
              <Text style={{ marginLeft: 20 }}>Chargement...</Text> // Message pendant le chargement
            ) : (
              // Pour chaque contact, on crée un bouton cliquable affichant la première lettre du nom et le nom complet
              contacts.map((contact, index) => (
                <TouchableOpacity
                  key={index} // Clé unique pour chaque élément de la liste
                  style={pageContact.btnContact}
                  onPress={() => setPage({ nom: 'voir', data: contact })} // Change de page pour voir les détails (tu peux améliorer ça plus tard)
                >
                  {/* Première lettre du nom en majuscule */}
                  <Text style={pageContact.profilContact}>
                    {contact.nom.charAt(0).toUpperCase()}
                  </Text>
                  {/* Nom complet du contact */}
                  <Text style={pageContact.texteContact}>{contact.nom}</Text>
                </TouchableOpacity>
              ))
            )}

          </View>

        </View>
      </ScrollView>

      {/*----------Footer------------------------------------------------------------------------------------------------------ */}
      <View style={pageContact.footer}>
        <View style={pageContact.recent}>
          <TouchableOpacity><AntDesign style={pageContact.iconRecent} name="clockcircleo" color="#000" size={20} /></TouchableOpacity>
          <Text style={pageContact.texteRecent}>Récents</Text>
        </View>

        <View style={pageContact.contactFooter}>
          <TouchableOpacity><FontAwesome name="user" color="rgb(63, 92, 248)" size={24} /></TouchableOpacity>
          <Text style={pageContact.texteContactFooter}>Contacts</Text>
        </View>
      </View>

      {/*---------Bouton ajout----------------------------------------------------------------------------------------------------- */}
      <TouchableOpacity onPress={() => setPage('ajout')}><Ionicons style={pageContact.iconAjout} name="add" color="#000" size={24} /></TouchableOpacity>

      {//Pour la suppression aussi
        messageAccueil !== '' && (
          <View style={{
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
          }}>
            <Text style={{
              color: 'green',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16
            }}>
              {messageAccueil}
            </Text>
          </View>
        )
      }
      <StatusBar style="auto" />
    </View>
  );
}