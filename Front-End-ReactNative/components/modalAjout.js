// Importation des composants nécessaires depuis le fichier d'import centralisé
import { View, Text, modalAjoutStyle, MaterialCommunityIcons, Modal, TouchableOpacity, TouchableWithoutFeedback, } from '../importation/importationModalAjout';

// Composant fonctionnel pour afficher un modal de sélection d'opérateur SIM
export default function ModalAjout({ visible, onFermer, setValeurSIM }) {
    return (
        // Affiche un modal transparent, animé en fondu (fade), visible selon l'état `visible`
        <Modal transparent visible={visible} animationType="fade" onRequestClose={onFermer}>

            {/* Permet de fermer le modal en appuyant en dehors */}
            <TouchableWithoutFeedback onPress={onFermer}>
                <View style={modalAjoutStyle.conteneurModal}>

                    {/* Empêche la fermeture si on appuie à l’intérieur du bloc principal */}
                    <TouchableWithoutFeedback>
                        <View style={modalAjoutStyle.conteneurModal2}>

                            {/* Bloc contenant les deux choix d'opérateur */}
                            <View style={modalAjoutStyle.champsFounrirModal}>

                                {/* Choix de l'opérateur Orange */}
                                <TouchableOpacity
                                    onPress={() => {
                                        setValeurSIM('orange');  // Définir le texte du champ à "orange"
                                        onFermer();              // Fermer le modal
                                    }}
                                    style={modalAjoutStyle.champs1}
                                >
                                    <MaterialCommunityIcons
                                        style={modalAjoutStyle.iconChamps1}
                                        name="sim-alert-outline"
                                        color="#000"
                                        size={24}
                                    />
                                    <View>
                                        <Text>USIM</Text>
                                        <Text style={modalAjoutStyle.texteSim}>Orange</Text>
                                    </View>
                                </TouchableOpacity>

                                {/* Choix de l'opérateur Telma */}
                                <TouchableOpacity
                                    onPress={() => {
                                        setValeurSIM('telma');   // Définir le texte du champ à "telma"
                                        onFermer();              // Fermer le modal
                                    }}
                                    style={modalAjoutStyle.champs2}
                                >
                                    <MaterialCommunityIcons
                                        style={modalAjoutStyle.iconChamps2}
                                        name="sim-alert-outline"
                                        color="#000"
                                        size={24}
                                    />
                                    <View>
                                        <Text>USIM</Text>
                                        <Text style={modalAjoutStyle.texteSim2}>Telma</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}
