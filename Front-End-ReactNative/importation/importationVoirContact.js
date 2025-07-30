import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import voirContactSyle from '../styles/voirContactStyle';

import ModifContact from '../screens/modifContact';
import { useState } from 'react';

// Exportation groupée
export { useState, ModifContact, voirContactSyle, AntDesign, SimpleLineIcons, FontAwesome, Dimensions, StyleSheet, Text, TouchableOpacity, View, StatusBar, Feather, MaterialIcons, MaterialCommunityIcons };