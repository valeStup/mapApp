
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import React from 'react';
import type {PropsWithChildren} from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import AddToLockScreen from '../../components/common/addToLS/AddToLockScreen';
import NavBarHome from '../../components/home/navBarHome/navBarHome';
import DownloadYourRegion from '../../components/home/DownloadYourRegion/DownloadYourRegion';
import AboutText from '../../components/home/AboutText/AboutText';

import { COLORS, SIZES } from '../../constants';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: COLORS.lightWhite,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: COLORS.lightWhite,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export default function TabOneScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <AddToLockScreen/> 
          <DownloadYourRegion />
          <Section title="About">
            <AboutText />
          </Section>
        </View>
      </ScrollView>
     { /*<NavBarBtm /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  navBar: {
    height: SIZES.navBar,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10 ,
  }
});
