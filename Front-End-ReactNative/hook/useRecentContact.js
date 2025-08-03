// Import des hooks React pour gérer l'état et les effets
import { useEffect, useState } from 'react';
// Import de l'instance axios configurée pour les requêtes API
import { api } from '../api';

// Hook personnalisé pour gérer la liste des contacts_recents
export default function useContacts_recents() {
    // État local pour stocker la liste des contacts
    const [contacts_recents, setContacts_recents] = useState([]);
    // État local pour indiquer si les contacts_recents sont en cours de chargement
    const [loading, setLoading] = useState(true);

    // Fonction asynchrone pour récupérer les contacts_recents depuis l'API
    const fetchContacts_recents = async () => {
        try {
            setLoading(true); // Active l'état de chargement
            // Envoi d'une requête GET vers /contacts_recents
            const response = await api.get('/contacts_recents');

            // Mise à jour de l'état contacts_recents avec les données reçues
            setContacts_recents(response.data);
        } catch (error) {
            // En cas d'erreur, affiche l'erreur dans la console
            console.error(error);
        } finally {
            setLoading(false); // Désactive l'état de chargement, quel que soit le résultat
        }
    };

    // useEffect pour lancer un appel API dès le montage du composant
    // Ici, on récupère tous les contacts_recents sans filtre
    useEffect(() => {
        fetchContacts_recents(); // appel initial sans filtre
    }, []);

    // On retourne les données et fonctions utiles aux composants qui utilisent ce hook
    return {
        contacts_recents,               // liste des contacts_recents
        loading,                // état de chargement
        chargerContacts_recents: fetchContacts_recents // fonction pour rafraîchir la liste avec filtre optionnel
    };
}
