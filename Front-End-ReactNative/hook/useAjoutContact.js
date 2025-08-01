// Importation de axios pour faire des requêtes HTTP
import axios from 'axios';
// Importation de la configuration axios personnalisée (url de base, etc.)
import { api } from '../api';

// Hook personnalisé pour gérer l'ajout d'un contact
export default function useAjoutContact({
    nom,               // valeur du champ nom
    numPhone,          // valeur du champ numéro de téléphone
    adresseEmail,      // valeur du champ email
    enregistrementSIM, // valeur du choix SIM (ex: 'telma', 'orange')

    setNom,            // fonction pour modifier l'état nom dans le parent
    setNumPhone,       // fonction pour modifier l'état numPhone dans le parent
    setAdresseEmail,   // fonction pour modifier l'état adresseEmail dans le parent
    setEnregistrementSIM, // fonction pour modifier l'état enregistrementSIM dans le parent

    setPage,           // fonction pour changer la page affichée (navigation interne)
    setMessage,        // fonction pour afficher des messages (erreurs/succès) dans le parent
    setTypeMessage     // fonction pour définir le type de message ('success' ou 'error')
}) {
    // Fonction asynchrone qui sera appelée pour ajouter un contact
    const ajouterContact = async () => {
        try {
            // Requête POST vers l'API pour créer un contact avec les données saisies
            const response = await api.post('/contacts', {
                nom,
                numPhone,
                adresseEmail,
                enregistrementSIM,
            });

            // Si réussite, on réinitialise les champs du formulaire
            setNom('');
            setNumPhone('');
            setAdresseEmail('');
            setEnregistrementSIM('telma');  // Valeur par défaut

            // Puis on change la page vers la vue détaillée du contact ajouté,
            // en passant les données du contact et un message de succès
            setPage({ nom: 'voir', data: response.data, message: "Contact ajouté avec succès !" });

            // On masque les messages (s'il y en a) au bout de 3 secondes
            setTimeout(() => {
                setMessage('');
                setTypeMessage('');
            }, 3000);

        } catch (error) {
            // Si erreur côté serveur, et que le code HTTP est 422 (erreur de validation)
            if (error.response && error.response.status === 422) {
                const erreurs = error.response.data.errors; // On récupère les erreurs détaillées

                // On transmet les erreurs au parent pour affichage sous les champs
                setMessage(erreurs); // Exemple : { nom: [...], numPhone: [...], ... }
            } else {
                // Pour toute autre erreur, on affiche un message générique
                setMessage({ general: ["Une erreur s'est produite."] });
            }

            // On définit le type de message à "error" pour styliser ou indiquer l'erreur
            setTypeMessage("error");

            // On masque les messages d'erreur après 4 secondes
            setTimeout(() => {
                setMessage({});
                setTypeMessage('');
            }, 4000);
        }
    };

    // On retourne la fonction ajouterContact pour pouvoir l'utiliser dans le composant
    return { ajouterContact };
}
