// Importation de axios pour faire des requêtes HTTP
import { api } from '../api';

// Hook personnalisé pour gérer l'ajout d'un contact
export default function useRecentAjoutContact() {
    // Fonction asynchrone qui sera appelée pour ajouter un contact
    const ajouterRecentContact = async ({ nom, enregistrementSIM, momentVoir, setNom, setEnregistrementSIM, setMomentVoir }) => {
        try {
            // Requête POST vers l'API pour créer un contact avec les données saisies
            await api.post('/contacts_recents', {
                nom,
                enregistrementSIM,
                momentVoir: momentVoir,
            });

            // Réinitialisation des champs
            setNom('');
            setEnregistrementSIM('');
            setMomentVoir("00:00");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                const erreurs = error.response.data.errors;
                console.error("Erreurs de validation :", erreurs);
            } else {
                console.error("Erreur lors de l'ajout :", error);
            }
        }
    };

    return { ajouterRecentContact };
}
