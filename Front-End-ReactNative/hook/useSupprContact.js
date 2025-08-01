// Import axios pour les requêtes HTTP
import axios from 'axios';
// Import de l'instance axios configurée (url base, headers, etc)
import { api } from '../api';

// Hook personnalisé pour supprimer un contact
export default function useSupprimerContact({ retour }) {
    // Fonction asynchrone qui supprime un contact par son ID
    const supprimerContact = async (id) => {
        try {
            // Envoi d'une requête DELETE vers l'API pour supprimer le contact
            await api.delete(`/contacts/${id}`);

            // Après suppression réussie, on appelle la fonction retour
            // pour revenir à la page précédente avec un message de succès
            retour(null, 'Contact supprimé avec succès !');
        } catch (error) {
            // En cas d'erreur, on log l'erreur en console (debug)
            console.error(error);

            // Affichage d'une alerte à l'utilisateur pour signaler l'erreur
            alert("Erreur lors de la suppression");
        }
    };

    // Retourne la fonction supprimerContact pour l'utiliser dans un composant
    return { supprimerContact };
}
