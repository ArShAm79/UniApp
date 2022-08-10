import React from 'react'

import {TextInput, View} from 'react-native'

import theme from '../theme'
import CustomIcon from './CustomIcon'
import makeStyles from "../helpers/makeStyles";
import {useSelector} from "react-redux";

export default function SearchInput({
  onChangeText,
  value,
  style,
  placeholder,
  ...others
}) {
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
  return (
    <View style={styles.searchView} testID="search-input-test">
      <CustomIcon name="icons8_search_1-1" size={22} color={palette.balticSea} />
      <TextInput
        style={{...styles.input, ...style}}
        onChangeText={onChangeText}
        value={value}
        placeholder={(placeholder)}
        {...others}
      />
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: palette.authInput,
    backgroundColor: palette.searchInput,
    borderWidth: 0.5,
    borderRadius: 8,
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  input: {
    fontFamily: theme.Shabnam,
    color: palette.searchInput,
    fontSize: 14,
    lineHeight: 18,
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 13,
    paddingBottom: 13
  }
}))
