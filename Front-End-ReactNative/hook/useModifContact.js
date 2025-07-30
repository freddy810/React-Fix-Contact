import axios from 'axios';

export default function useModifContact({
    contactId,
    nom,
    numPhone,
    adresseEmail,
    enregistrementSIM,
    setNom,
    setNumPhone,
    setAdresseEmail,
    setEnregistrementSIM,
    retour,
    setMessage,    // nouveau
    setTypeMessage // nouveau
}) {
    const modifierContact = async () => {
        try {
            const response = await axios.put(`http://192.168.225.58:8000/api/contacts/${contactId}`, {
                nom,
                numPhone,
                adresseEmail,
                enregistrementSIM,
            });

            // Réinitialiser les champs
            setNom('');
            setNumPhone('');
            setAdresseEmail('');
            setEnregistrementSIM('telma');

            // Rediriger vers VoirContact avec contact + message succès
            retour(response.data, "Contact modifié avec succès !");

            // Optionnel : masquer message après 3 secondes
            setTimeout(() => {
                setMessage('');
                setTypeMessage('');
            }, 3000);

        } catch (error) {
            // Afficher message erreur
            setMessage("Erreur lors de modification du contact.");
            setTypeMessage("error");

            // Optionnel : masquer message après 3 secondes
            setTimeout(() => {
                setMessage('');
                setTypeMessage('');
            }, 3000);
        }
    };

    return { modifierContact };
}
