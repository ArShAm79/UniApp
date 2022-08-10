import {useNavigation} from '@react-navigation/native'
import React from 'react'

import {View, StyleSheet, Pressable} from 'react-native'

import CustomIcon from './CustomIcon'
import Typography from './Typography'
import makeStyles from "../helpers/makeStyles";
import {useSelector} from "react-redux";

export default function IntroHeader({title}) {
  const navigation = useNavigation()
  const {theme: palette} = useSelector((state) => state.authReducer)

  const styles = useStyles()
  return (
    <View style={styles.container} testID="intro-header-test">
      <View style={styles.headerLeft}>
        <Pressable
          // onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <CustomIcon
            name="icons8_teacher-1-course"
            size={32}
            color={palette.balticSea}
          />
        </Pressable>
      </View>
      <View style={styles.headerCenter}>
        <Typography variant="h4" style={styles.title}>
          {(title)}
        </Typography>
      </View>
      <View style={styles.headerRight} />
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
  container: {
    flexDirection:  'row',
    alignItems: 'center',
    paddingTop: 25,
    // paddingBottom: 25,
    backgroundColor: palette.secondary
  },
  headerLeft: {
    width: 54,
    height: 54
  },
  headerCenter: {
    flex: 1
  },
  headerRight: {
    width: 54,
    height: 54
  },
  title: {
    color: palette.nero,
    textAlign: 'center'
  },
  goBackButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))
