import React from 'react';

import { useFonts } from '@use-expo/font';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';

let customFonts = {
  'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
};

export default (props) => {
  let [fontsLoaded] = useFonts(customFonts);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Platform Default</Text>
        <Text style={{ fontFamily: 'Inter-Black' }}>Inter Black</Text>
        <Text style={{ fontFamily: 'Inter-SemiBoldItalic' }}>Inter SemiBoldItalic</Text>
      </View>
    );
  }
};
