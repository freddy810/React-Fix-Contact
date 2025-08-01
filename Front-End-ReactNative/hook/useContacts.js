// Import des hooks React pour gérer l'état et les effets
import { useEffect, useState } from 'react';
// Import de l'instance axios configurée pour les requêtes API
import { api } from '../api';

// Hook personnalisé pour gérer la liste des contacts
export default function useContacts() {
    // État local pour stocker la liste des contacts
    const [contacts, setContacts] = useState([]);
    // État local pour indiquer si les contacts sont en cours de chargement
    const [loading, setLoading] = useState(true);

    // Fonction asynchrone pour récupérer les contacts depuis l'API
    // Elle accepte un paramètre optionnel 'recherche' pour filtrer les contacts
    const fetchContacts = async (recherche = '') => {
        try {
            setLoading(true); // Active l'état de chargement
            // Envoi d'une requête GET vers /contacts avec paramètre de recherche
            const response = await api.get('/contacts', {
                params: { recherche }
            });
            // Mise à jour de l'état contacts avec les données reçues
            setContacts(response.data);
        } catch (error) {
            // En cas d'erreur, affiche l'erreur dans la console
            console.error(error);
        } finally {
            setLoading(false); // Désactive l'état de chargement, quel que soit le résultat
        }
    };

    // useEffect pour lancer un appel API dès le montage du composant
    // Ici, on récupère tous les contacts sans filtre
    useEffect(() => {
        fetchContacts(); // appel initial sans filtre
    }, []);

    // On retourne les données et fonctions utiles aux composants qui utilisent ce hook
    return {
        contacts,               // liste des contacts
        loading,                // état de chargement
        chargerContacts: fetchContacts // fonction pour rafraîchir la liste avec filtre optionnel
    };
}
