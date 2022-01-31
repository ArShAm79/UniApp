import React, {useState} from 'react'
import {ScrollView, View, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Typography from '../../../../components/Typography'
import SimpleHeader from '../../../../components/SimpleHeader'
import CustomPicker from '../../../../components/CustomPicker'
import palette from '../../../../theme/palette'
import HorizontalSeparator from '../../../../components/HorizontalSeparator'
import ImagePicker from '../../../../components/ImagePicker'
import CustomInput from '../../../../components/CustomInput'
import CustomButton from '../../../../components/CustomButton'
import styles from './stylesheet'

export default function BookShopCreate({
  image = null,
  title = '',
  type = '',
  price = '',
  desc = '',
  editScreen = false
}) {
  const navigation = useNavigation()

  const [adType, setAdType] = useState(type)
  const [imageUri, setImageUri] = useState(image)
  const [adTitle, setAdTitle] = useState(title)
  const [adPrice, setAdPrice] = useState(price)
  const [description, setDescription] = useState(desc)

  return (
    <View style={styles.container}>
      <SimpleHeader title={editScreen ? 'ویرایش آگهی' : 'ثبت آگهی جدید'} />

      <ScrollView>
        <Pressable
          style={styles.Guide}
          onPress={() => navigation.navigate('guide')}>
          <Typography variant="body2" color={palette.M_3_SYS_OUTLINE}>
            راهنمای ثبت اگهی
          </Typography>
          <Typography>〈</Typography>
        </Pressable>

        <HorizontalSeparator margin={18} />

        <View style={{marginHorizontal: 16}}>
          <CustomPicker
            label="نوع اگهی:"
            labelStyle={styles.pickerLabelStyle}
            required
            items={['خرید', 'فروش', 'امانت']}
            labelColor={palette.M_3_SYS_ON_SURFACE}
            selectedItem={adType}
            onSelectItem={(type) => setAdType(type)}
          />
        </View>

        <HorizontalSeparator margin={18} />

        <View style={styles.imageInput}>
          <ImagePicker
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
            width={144}
            height={144}
          />
          <Typography variant="bold18" color={palette.M_3_SYS_ON_BACKGROUND}>
            عکس اگهی:
          </Typography>
        </View>

        <HorizontalSeparator marginTop={18} marginBottom={0} />

        <View style={{marginHorizontal: 16}}>
          <CustomInput
            placeholder="عنوان"
            helperText="در عنوان اگهی به موارد مهم و چشمگیر اشاره کنید"
            helperTextStyle={styles.helperText}
            label="عنوان اگهی:"
            required
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
            labelStyle={styles.pickerLabelStyle}
            value={adTitle}
            onChangeText={(text) => setAdTitle(text)}
          />
        </View>

        <HorizontalSeparator marginTop={18} marginBottom={0} />

        <View style={styles.priceContainer}>
          <View style={styles.priceInput}>
            <CustomInput
              placeholder="وارد کنید"
              label="قیمت:"
              keyboardType="numeric"
              labelColor={palette.M_3_SYS_ON_BACKGROUND}
              value={adPrice}
              onChangeText={(text) => setAdPrice(text)}
            />
          </View>
          <View style={styles.tomanContainer}>
            <Typography
              style={{marginBottom: 15}}
              variant="body1"
              color={palette.M_3_SYS_ON_BACKGROUND}>
              تومان
            </Typography>
          </View>
        </View>

        <HorizontalSeparator margin={18} />

        <View style={{marginHorizontal: 16}}>
          <Typography
            variant="bold18"
            color={palette.M_3_SYS_ON_BACKGROUND}
            style={styles.pickerLabelStyle}>
            توضیحات اگهی:
          </Typography>
        </View>

        <View style={{marginHorizontal: 16, marginTop: 16}}>
          <Typography variant="body2" color={palette.M_3_SYS_OUTLINE}>
            جزئیات و نکات قابل توجه اگهی خود را کامل و دقیق بنویسید.محل
            تحویل(ترجیحا داخل دانشگاه)و راه ارتباطی حتما ذکر شود (ترجیحا از فضای
            مجازی استفاده کنید).
          </Typography>
        </View>

        <View style={styles.descInputContainer}>
          <CustomInput
            placeholder="«توضیحات رویداد»"
            textAlignVertical="top"
            labelColor={palette.M_3_SYS_PRIMARY}
            labelStyle={styles.labelStyle}
            style={styles.descInput}
            value={description}
            multiline
            onChangeText={(desc) => setDescription(desc)}
          />
        </View>

        <HorizontalSeparator margin={18} />

        <View style={styles.buttonContainer}>
          <CustomButton
            title={editScreen ? 'ویرایش اگهی' : 'ثبت آگهی'}
            size="small"
            startIcon={editScreen ? 'mode_edit_24px' : 'add_24px'}
            startIconSize={18}
            startIconColor={palette.M_3_SYS_ON_PRIMARY}
          />
        </View>
      </ScrollView>
    </View>
  )
}
