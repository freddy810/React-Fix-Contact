// hook/useSupprimerContact.js
import axios from 'axios';

export default function useSupprimerContact({ retour }) {
    const supprimerContact = async (id) => {
        try {
            await axios.delete(`http://192.168.225.58:8000/api/contacts/${id}`);
            retour(null, 'Contact supprimé avec succès !');
        } catch (error) {
            console.error(error);
            alert("Erreur lors de la suppression");
        }
    };

    return { supprimerContact };
}
