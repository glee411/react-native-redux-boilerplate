import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux'

import Timer from '../components/Timer';

class TimerScreen extends React.Component {
  static navigationOptions = {
    title: 'Timer',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timerContainer}>
          <Timer/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  timerContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});

export default connect(null, null)(TimerScreen)
