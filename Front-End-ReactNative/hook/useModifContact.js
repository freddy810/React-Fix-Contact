// Importation de l'instance axios configurée pour communiquer avec l'API
import { api } from '../api';

// Hook personnalisé pour modifier un contact existant
export default function useModifContact({
    contactId,         // ID du contact à modifier
    nom,               // nouvelle valeur du nom
    numPhone,          // nouvelle valeur du numéro de téléphone
    adresseEmail,      // nouvelle valeur de l'adresse email
    enregistrementSIM, // nouvelle valeur du champ SIM

    setNom,            // fonction pour modifier l'état nom dans le composant parent
    setNumPhone,       // fonction pour modifier l'état numéro dans le composant parent
    setAdresseEmail,   // fonction pour modifier l'état email dans le composant parent
    setEnregistrementSIM, // fonction pour modifier le choix SIM dans le parent

    retour,            // fonction callback pour revenir à la page précédente avec données mises à jour
    setMessage,        // fonction pour afficher les messages (erreurs/succès) dans le parent
    setTypeMessage     // fonction pour définir le type de message ('success' ou 'error')
}) {
    // Fonction asynchrone qui sera appelée pour modifier un contact
    const modifierContact = async () => {
        try {
            // Envoi d'une requête PUT vers l'API pour mettre à jour le contact avec l'ID donné
            const response = await api.put(`/contacts/${contactId}`, {
                nom,
                numPhone,
                adresseEmail,
                enregistrementSIM,
            });

            // Réinitialisation des champs du formulaire après succès
            setNom('');
            setNumPhone('');
            setAdresseEmail('');
            setEnregistrementSIM('telma'); // valeur par défaut

            // Appel de la fonction retour pour revenir à la page précédente
            // avec le contact mis à jour et un message de succès
            retour(response.data, "Contact modifié avec succès !");

            // Effacement des messages d'info après 3 secondes
            setTimeout(() => {
                setMessage({});
                setTypeMessage('');
            }, 3000);

        } catch (error) {
            // Si erreur de validation (code 422), on récupère les erreurs détaillées
            if (error.response && error.response.status === 422) {
                const erreurs = error.response.data.errors;
                // On envoie les erreurs au parent pour affichage sous les champs
                setMessage(erreurs);  // objet exemple : { nom: [...], numPhone: [...] }
            } else {
                // Pour les autres erreurs, on affiche un message générique
                setMessage({ general: ["Erreur lors de modification du contact."] });
            }
            // Type de message = "error" pour la gestion du style ou logique d'affichage
            setTypeMessage("error");

            // Effacement des messages d'erreur après 3 secondes
            setTimeout(() => {
                setMessage({});
                setTypeMessage('');
            }, 3000);
        }
    };

    // On retourne la fonction modifierContact pour l'utiliser dans le composant parent
    return { modifierContact };
}
