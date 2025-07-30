import { View, Text, modalAjoutStyle, MaterialCommunityIcons, Modal, TouchableOpacity, TouchableWithoutFeedback, } from '../importation/importationModalAjout';

export default function ModalAjout({ visible, onFermer, setValeurSIM }) {
    return (
        <Modal transparent visible={visible} animationType="fade" onRequestClose={onFermer}>
            {/* Touche en dehors */}
            <TouchableWithoutFeedback onPress={onFermer}>
                <View style={modalAjoutStyle.conteneurModal}>

                    {/* Pour empêcher la fermeture quand on appuie à l'intérieur du modal */}
                    <TouchableWithoutFeedback>
                        <View style={modalAjoutStyle.conteneurModal2}>
                            <View style={modalAjoutStyle.champsFounrirModal}>
                                <TouchableOpacity onPress={() => { setValeurSIM('orange'); onFermer() }} style={modalAjoutStyle.champs1}>
                                    <MaterialCommunityIcons style={modalAjoutStyle.iconChamps1} name="sim-alert-outline" color="#000" size={24} />
                                    <View>
                                        <Text>USIM</Text>
                                        <Text style={modalAjoutStyle.texteSim}>Orange</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { setValeurSIM('telma'); onFermer() }} style={modalAjoutStyle.champs2}>
                                    <MaterialCommunityIcons style={modalAjoutStyle.iconChamps2} name="sim-alert-outline" color="#000" size={24} />
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
