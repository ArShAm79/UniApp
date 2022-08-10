import React from 'react'
import {Pressable} from 'react-native'
import makeStyles from '../helpers/makeStyles'

import CustomIcon from './CustomIcon'
// import CustomIcon from './CustomIcon'
import Typography from './Typography'

export default function CustomButton({
                                         onPress,
                                         title,
                                         style,
                                         textStyle,
                                         size = 'big',
                                         type = 'confirm',
                                         disabled,
                                         startIcon,
                                         startIconSize,
                                         startIconColor,
                                         endIcon,
                                         endIconSize,
                                         endIconColor
                                     }) {
    const styles = useStyles()
    return (
        <Pressable
            testID="button-test"
            android_ripple={{color: 'rgba(211, 228, 255, 0.8)', borderless: 16}}
            style={[
                styles[`${size}Button`],
                styles[`${type}${disabled ? 'Disabled' : ''}Button`],
                style
            ]}
            onPress={onPress}
            disabled={disabled}>
            {startIcon && (
                <CustomIcon
                    testID="button-start-icon-test"
                    color={startIconColor}
                    name={startIcon}
                    style={styles.startIcon}
                    size={startIconSize ? startIconSize : 20}
                />
            )}
            <Typography
                variant={`${size}Button`}
                style={[styles.text, styles[`${type}Text`], textStyle]}>
                {title}
            </Typography>
            {endIcon && (
                <CustomIcon
                    color={endIconColor}
                    name={endIcon}
                    style={styles.endIcon}
                    size={endIconSize ? endIconSize : 20}
                    testID="button-end-icon-test"
                />
            )}
        </Pressable>
    )
}

const useStyles = makeStyles((palette) => ({
    bigButton: {
        width: '100%',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },
    smallButton: {
        width: '100%',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        flexDirection: 'row'
    },
    confirmButton: {
        backgroundColor: palette.M_3_SYS_PRIMARY
    },
    confirmDisabledButton: {
        // backgroundColor: 'red'
        backgroundColor: palette.M_3_SYS_PRIMARY_CONTAINER
    },
    cancelButton: {
        backgroundColor: palette.M_3_SYS_BACKGROUND,
        borderWidth: 1,
        borderColor: palette.M_3_SYS_OUTLINE
    },
    text: {},
    confirmText: {
        color: palette.M_3_SYS_ON_PRIMARY
    },
    cancelText: {
        color: palette.M_3_SYS_PRIMARY
    },
    startIcon: {
        // position: 'absolute',
        marginRight: 5
    },
    endIcon: {
        // position: 'absolute',
        right: 20
    }
}))
