import React from 'react'
import {View} from 'react-native'
import DashboardButtonPage from '../Components/DashboardButtonPage/DashboardButtonPage'
import styles from './stylesheet'
export default function DashbaordMenu() {
  return (
    <View style={styles.root}>
      <DashboardButtonPage
        title="درس های من"
        iconName="icons8_teacher-1-course"
      />
      <DashboardButtonPage
        title="اخبار و رویدادها"
        iconName="icons8_rss-1-news"
      />
      <DashboardButtonPage
        title="فراخوان ها"
        iconName="icons8_commercial-1-announcement"
      />
      <DashboardButtonPage
        title="کتابخانه مرکزی"
        iconName="icons8_book_shelf-1-library"
      />
      <DashboardButtonPage title="ایمیل دانشگاهی" iconName="mail_outline" />
      <DashboardButtonPage title="نقشه" iconName="icons8_map_marker_1-1" />
      <DashboardButtonPage
        title="کتاب یاب"
        iconName="icons8_books-1-exchange"
      />
    </View>
  )
}