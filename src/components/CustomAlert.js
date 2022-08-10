import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

import CustomIcon from './CustomIcon'
import Typography from './Typography'
import CustomButton from './CustomButton'

function CustomAlert({
  icon,
  iconSize,
  iconColor,
  image,
  imageSize = 24,
  title,
  titleColor,
  titleStyle,
  message,
  messageColor,
  messageStyle,
  bgColor,
  buttons
}) {
  return (
    <View style={[styles.alertContainer, {backgroundColor: bgColor}]} testID="custom-alert-test">
      {(icon || image) && (
        <View style={styles.alertIcon}>
          {icon && <CustomIcon name={icon} size={iconSize} color={iconColor} />}
          {image && (
            <Image
              source={image}
              style={{
                width: imageSize,
                height: imageSize,
                borderRadius: imageSize / 2,
                resizeMode: 'cover'
              }}
            />
          )}
        </View>
      )}

      <Typography
        variant="medium18"
        style={[styles.alertTitle, titleStyle]}
        color={titleColor}>
        {title}
      </Typography>

      {message && (
        <Typography
          variant="body2"
          style={[styles.alertMessage, messageStyle]}
          color={messageColor ?? titleColor}>
          {message}
        </Typography>
      )}

      <View style={styles.buttons}>
        {buttons.map((btn, index) => (
          <View key={index} style={styles.button}>
            <CustomButton
              title={btn.title}
              onPress={btn.onPress}
              size="small"
              textStyle={{color: btn.color ?? titleColor}}
              style={{
                height: 45,
                backgroundColor: btn.bgColor ?? bgColor,
                borderColor: btn.borderColor,
                borderWidth: btn.borderWidth
              }}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  alertContainer: {
    borderRadius: 15,
    padding: 20,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  alertIcon: {
    marginBottom: 20
  },
  alertMessage: {
    marginTop: 20
  },
  buttons: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20
  },
  button: {
    marginHorizontal: 5,
    flex: 1
  }
})

export default CustomAlert
