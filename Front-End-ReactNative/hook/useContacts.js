import { useEffect, useState } from 'react';
import { api } from '../api';

export default function useContacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchContacts = async () => {
        try {
            const response = await api.get('/contacts');
            setContacts(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts(); // appel initial
    }, []);

    return {
        contacts,
        loading,
        chargerContacts: fetchContacts // <-- on renvoie la fonction ici
    };
}

