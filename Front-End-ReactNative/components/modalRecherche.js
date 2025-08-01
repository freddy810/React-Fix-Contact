// Importation de React et du hook useState pour gérer l'état local
import React, { useState } from 'react';

// Importation des composants nécessaires depuis React Native
import { View, Text, StyleSheet, TextInput, Modal, TouchableOpacity } from 'react-native';

// Importation de l’icône de recherche depuis Feather Icons
import { Feather } from '@expo/vector-icons';

// Importation des styles personnalisés pour ce modal
import modalRechercheStyle from '../styles/modalRechercheStyle';

// Composant fonctionnel représentant le modal de recherche
export default function ModalRecherche({ visible, onClose, onValider }) {

    // État local pour stocker le texte saisi dans le champ de recherche
    const [recherche, setRecherche] = useState('');

    // Fonction appelée quand on valide la recherche (bouton OK)
    const validerRecherche = () => {
        if (recherche.trim() !== '') { // Vérifie que le champ n'est pas vide
            onValider(recherche);     // Envoie le texte saisi au composant parent
            onClose();                // Ferme le modal
        }
    };

    return (
        // Le Modal s'affiche seulement si `visible` est vrai
        <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>

            {/* Arrière-plan légèrement sombre pour le modal */}
            <View style={modalRechercheStyle.modalBackground}>

                {/* Conteneur principal du contenu du modal */}
                <View style={modalRechercheStyle.modalContainer}>

                    {/* Titre du modal */}
                    <Text style={modalRechercheStyle.header}> Recherche</Text>

                    {/* Champ de saisie avec une icône de recherche */}
                    <View style={modalRechercheStyle.inputContainer}>
                        <Feather
                            name="search"
                            size={20}
                            color="#999"
                            style={modalRechercheStyle.iconSearch}
                        />
                        <TextInput
                            style={modalRechercheStyle.input}
                            placeholder="Rechercher un contact..." // Texte grisé dans le champ
                            placeholderTextColor="#999"
                            value={recherche}                    // Liaison avec l'état local
                            onChangeText={setRecherche}          // Met à jour la variable `recherche`
                        />
                    </View>

                    {/* Groupe de boutons : OK et Fermer */}
                    <View style={modalRechercheStyle.buttonGroup}>

                        {/* Bouton OK qui valide la recherche */}
                        <TouchableOpacity
                            onPress={validerRecherche}
                            style={modalRechercheStyle.okButton}
                        >
                            <Text style={modalRechercheStyle.okButtonText}>OK</Text>
                        </TouchableOpacity>

                        {/* Bouton Fermer qui ferme simplement le modal */}
                        <TouchableOpacity
                            onPress={onClose}
                            style={modalRechercheStyle.closeButton}
                        >
                            <Text style={modalRechercheStyle.closeButtonText}>Fermer</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </Modal>
    );
}
