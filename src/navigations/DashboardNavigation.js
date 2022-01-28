import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Announcement from '../pages/main/Announcements/Announcement/Announcement'
import AnnouncementView from '../pages/main/Announcements/AnnouncementView/AnnouncementView'
import CreateAnnouncement from '../pages/main/Announcements/CreateAnnouncement/CreateAnnouncement'
import Dashboard from '../pages/main/Dashboard/Dashboard'
import MyCoursesMainPage from '../pages/main/MyCourses/MyCoursesMainPage/MyCoursesMainPage'
import EditAnnouncement from './../pages/main/Announcements/EditAnnouncement/EditAnnouncement'
import Setting from '../pages/main/MenuPages/Setting/Setting'
import MyCoursesCreateCourse from './../pages/main/MyCourses/MyCoursesCreateCourse/MyCoursesCreateCourse'
import MyCoursesCourseView from '../pages/main/MyCourses/MyCoursesCourseView/MyCoursesCourseView'
import ToDoDetails from '../pages/main/Calendar/ToDoDetails'
const Stack = createStackNavigator()

export default function DashboardNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="mainpage">
      <Stack.Screen name="todo-details" component={ToDoDetails} />
      <Stack.Screen name="landing-page" component={Dashboard} />
      <Stack.Screen name="announcement" component={Announcement} />
      <Stack.Screen name="announcement-item" component={AnnouncementView} />
      <Stack.Screen name="create-announcement" component={CreateAnnouncement} />
      <Stack.Screen name="edit-announcement" component={EditAnnouncement} />
      <Stack.Screen name="setting" component={Setting} />
      <Stack.Screen name="my-courses-main-page" component={MyCoursesMainPage} />
      <Stack.Screen name="create-course" component={MyCoursesCreateCourse} />
      <Stack.Screen name="course-view" component={MyCoursesCourseView} />
    </Stack.Navigator>
  )
}
