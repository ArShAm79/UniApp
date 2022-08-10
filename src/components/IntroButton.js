import React from 'react'
import {Pressable} from 'react-native'

import Typography from './Typography'
import makeStyles from "../helpers/makeStyles";

export default function IntroButton({onPress, title, style, textStyle}) {
  const styles = useStyles()
  return (
    <Pressable style={[styles.button, style]} onPress={onPress} testID="intro-button-test">
      <Typography variant="smallButton" style={[styles.text, textStyle]}>
        {(title)}
      </Typography>
    </Pressable>
  )
}

const useStyles = makeStyles((palette) => ({
  button: {
    width: 170,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.introButton
  },
  text: {
    // fontWeight: 'bold',
    color: palette.mainButton
    // fontSize: 20,
    // width: '100%'
    // lineHeight: 32,
    // paddingRight: 15,
    // paddingLeft: 15,
    // paddingTop: 13,
    // paddingBottom: 13
  }
}))
