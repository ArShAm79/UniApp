import {StyleSheet} from 'react-native'
import theme from '../theme'

const makeStyles = (styles) => () => {
  // const theme = useSelector((state) => state.authReducer.theme)
  return StyleSheet.create(styles(theme))
}
export default makeStyles
