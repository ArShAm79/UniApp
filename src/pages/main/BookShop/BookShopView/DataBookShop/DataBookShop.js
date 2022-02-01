import React from 'react'
import styles from './stylesheet'
import {Image, Pressable, View} from 'react-native'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import {useNavigation} from '@react-navigation/native'

// eslint-disable-next-line no-unused-vars
export default function DataBookShop({title, type, bookImage, price}) {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.root}
      onPress={() => navigation.navigate('each-bookshop')}>
      <View style={styles.cardStyle}>
        <View style={styles.cardDesc}>
          <View style={styles.bookTitle}>
            <Typography
              variant="h5"
              color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
              {title}
            </Typography>
          </View>

          <View style={styles.AdType}>
            <Typography variant="medium12" color={palette.M_3_SYS_ON_PRIMARY}>
              {type}
            </Typography>
          </View>

          <View style={styles.priceBook}>
            <Typography
              variant="smallButton"
              color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
              {price}
            </Typography>
          </View>
        </View>

        <View style={styles.bookImageStyle}>
          <Image
            style={styles.bookImage}
            source={require('../../../../../assets/images/sample_avatar.jpg')}
          />
        </View>
      </View>
    </Pressable>
  )
}
