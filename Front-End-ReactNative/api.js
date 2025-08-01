// Importation d'axios, bibliothèque pour faire des requêtes HTTP
import axios from 'axios';

// Création d'une instance axios préconfigurée
export const api = axios.create({
    // URL de base pour toutes les requêtes vers l'API backend
    // Ici, c'est l'adresse IP locale de ton PC + le port + le chemin API
    baseURL: 'http://192.168.225.58:8000/api', // ← à adapter selon ton réseau local

    // En-têtes HTTP par défaut pour indiquer que l'on envoie et attend du JSON
    headers: {
        'Content-Type': 'application/json', // Corps des requêtes en JSON
        Accept: 'application/json',         // On attend du JSON en réponse
    },
});
