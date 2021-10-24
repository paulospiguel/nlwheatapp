import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

import LogoSvg from "../../assets/logo.svg"

const Header: React.FC = () => {
  return <View style={styles.container}>
    <LogoSvg />

    <Text style={styles.logoutText}>Sair</Text>
  </View>;
}

export default Header;