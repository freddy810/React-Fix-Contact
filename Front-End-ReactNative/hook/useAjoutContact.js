import axios from 'axios';

export default function useAjoutContact({
    nom,
    numPhone,
    adresseEmail,
    enregistrementSIM,
    setNom,
    setNumPhone,
    setAdresseEmail,
    setEnregistrementSIM,
    setPage,
    setMessage,    // nouveau
    setTypeMessage // nouveau
}) {
    const ajouterContact = async () => {
        try {
            const response = await axios.post('http://192.168.225.58:8000/api/contacts', {
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
            setPage({ nom: 'voir', data: response.data, message: "Contact ajouté avec succès !" });

            // Optionnel : masquer message après 3 secondes
            setTimeout(() => {
                setMessage('');
                setTypeMessage('');
            }, 3000);

        } catch (error) {

            // Afficher message erreur
            setMessage("Erreur lors de l'ajout du contact.");
            setTypeMessage("error");

            // Optionnel : masquer message après 3 secondes
            setTimeout(() => {
                setMessage('');
                setTypeMessage('');
            }, 3000);
        }
    };

    return { ajouterContact };
}
